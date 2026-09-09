import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE = process.env.BASE ?? 'http://localhost:4321'
const OUT = 'scripts/review/shots'
await mkdir(OUT, { recursive: true })

const ROUTES = ['/', '/about', '/work', '/work/screen-time-native-integration',
  '/expertise', '/open-source', '/contact', '/archive',
  '/id', '/id/about', '/id/work', '/id/contact', '/nope-404']

const browser = await chromium.launch()
const problems = []

async function visit(page, url, label) {
  const msgs = []
  page.on('console', (m) => m.type() === 'error' && msgs.push(m.text()))
  page.on('pageerror', (e) => msgs.push(`PAGEERROR: ${e.message}`))
  const res = await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' })
  if (msgs.length) problems.push({ url, label, msgs })
  return res
}

// 1. Console/page errors across every route, desktop + mobile
for (const width of [1280, 375]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } })
  const page = await ctx.newPage()
  for (const url of ROUTES) await visit(page, url, `w${width}`)
  await ctx.close()
}

// 2. Horizontal overflow at 320/375
for (const width of [320, 375]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } })
  const page = await ctx.newPage()
  for (const url of ROUTES) {
    await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' })
    const over = await page.evaluate(
      (w) => ({ scroll: document.documentElement.scrollWidth, client: w }),
      width,
    )
    if (over.scroll > over.client + 1) {
      problems.push({ url, label: `overflow@${width}`, msgs: [`scrollWidth ${over.scroll} > ${over.client}`] })
    }
  }
  await ctx.close()
}

// 3. Logo vs name vertical centring in the header
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  const box = await page.evaluate(() => {
    const logo = document.querySelector('header a img')
    const name = document.querySelector('header a span')
    if (!logo || !name) return null
    const l = logo.getBoundingClientRect()
    const n = name.getBoundingClientRect()
    return {
      logo: { top: +l.top.toFixed(1), bottom: +l.bottom.toFixed(1), h: +l.height.toFixed(1), w: +l.width.toFixed(1), mid: +((l.top + l.bottom) / 2).toFixed(1) },
      name: { top: +n.top.toFixed(1), bottom: +n.bottom.toFixed(1), h: +n.height.toFixed(1), mid: +((n.top + n.bottom) / 2).toFixed(1) },
      natural: { w: logo.naturalWidth, h: logo.naturalHeight },
    }
  })
  console.log('HEADER GEOMETRY:', JSON.stringify(box, null, 2))
  if (box) console.log('midpoint delta (logo - name):', (box.logo.mid - box.name.mid).toFixed(2), 'px')
  await page.screenshot({ path: `${OUT}/header.png`, clip: { x: 0, y: 0, width: 520, height: 64 } })
  await ctx.close()
}

// 4. Screenshots: desktop + mobile, dark + light, EN + ID
for (const [w, tag] of [[1280, 'desktop'], [390, 'mobile']]) {
  for (const theme of ['dark', 'light']) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 1000 } })
    const page = await ctx.newPage()
    await page.addInitScript((t) => localStorage.setItem('sb-theme', t), theme)
    for (const [url, name] of [['/', 'home'], ['/work/screen-time-native-integration', 'case'], ['/id', 'home-id']]) {
      await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' })
      await page.screenshot({ path: `${OUT}/${tag}-${theme}-${name}.png`, fullPage: name === 'home' ? false : false })
    }
    await ctx.close()
  }
}

await browser.close()

if (problems.length) {
  console.log('\n=== PROBLEMS ===')
  for (const p of problems) console.log(`[${p.label}] ${p.url}\n  ${p.msgs.join('\n  ')}`)
} else {
  console.log('\nNo console errors, page errors, or horizontal overflow found.')
}
