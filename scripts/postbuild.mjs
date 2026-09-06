// Next's metadata file convention emits OG images as extensionless files
// (out/opengraph-image). GitHub Pages then serves them without an image
// content type and social scrapers reject them. Give every generated OG image
// a .png name and repoint the emitted HTML at it.
import { readdir, readFile, writeFile, copyFile, stat } from 'node:fs/promises'
import path from 'node:path'

const OUT = 'out'

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((e) => {
      const p = path.join(dir, e.name)
      return e.isDirectory() ? walk(p) : Promise.resolve([p])
    }),
  )
  return files.flat()
}

const files = await walk(OUT)

// 1. Copy each extensionless opengraph-image to a .png sibling.
const images = files.filter((f) => path.basename(f) === 'opengraph-image')
for (const img of images) {
  await copyFile(img, `${img}.png`)
}

// 2. Rewrite references, including Next's cache-busting query string.
const htmlLike = files.filter((f) => /\.(html|txt|xml)$/.test(f))
let patched = 0
for (const file of htmlLike) {
  const original = await readFile(file, 'utf8')
  // Negative lookahead: skip references that already end in .png, otherwise a
  // second pass turns opengraph-image.png into opengraph-image.png.png.
  const updated = original.replace(
    /opengraph-image(?!\.png)(\?[a-z0-9]+)?/gi,
    'opengraph-image.png',
  )
  if (updated !== original) {
    await writeFile(file, updated)
    patched++
  }
}

// 3. llms.txt — a plain-text map of the site for AI crawlers and answer engines.
//    Generated from the same content the pages render, so it cannot drift.
const { writeLlmsTxt } = await import('./llms-txt.mjs')
const llmsBytes = await writeLlmsTxt(OUT)

console.log(
  `postbuild: ${images.length} OG image(s) renamed, ${patched} file(s) repointed, ` +
    `llms.txt ${llmsBytes} bytes`,
)

// Fail loudly rather than silently shipping a broken social card.
if (images.length === 0) throw new Error('postbuild: no opengraph-image found in out/')
await stat(path.join(OUT, 'opengraph-image.png'))
