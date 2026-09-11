// Emits /llms.txt: a plain-text summary of who this site is about and what it
// contains. Optional discovery aid, not a search or AI ranking requirement.
// URLs come from the sitemap; this editorial summary needs review with content.
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE = 'https://solusibejo.com'

export async function writeLlmsTxt(outDir) {
  const sitemap = await readFile(path.join(outDir, 'sitemap.xml'), 'utf8')
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])

  const en = urls.filter(u => !u.startsWith(`${SITE}/id`))
  const id = urls.filter(u => u.startsWith(`${SITE}/id`))

  const body = `# Chandra Abdul Fattah

> Mobile Engineer and Flutter Consultant based in Bandung, West Java, Indonesia.
> Specializes in mobile engineering: Flutter, native Android and iOS
> integration, SDK and plugin engineering, software architecture, developer
> tooling, and AI-augmented engineering workflows.

Chandra has built software since 2014, works as a Staff Engineer on mobile at
Evermos, leads mobile development part-time at TechLab Security for GeoXSpot,
works with Cloud Creatures as a freelance Mobile Engineer, and runs Solusi Bejo.
His public work includes Flutter packages, native plugins, and upstream contributions.
The screen_time plugin implements Android usage tracking and app restrictions;
its iOS implementation currently covers permission requests and status only.
See the Screen Time case study for the reviewed implementation and limitations.

The homepage includes attributed summaries of LinkedIn recommendations. The About
page lists professional experience, mentoring, speaking, and certification history,
including expiry dates for historical credentials. Editorial review: 2026-09-09.

This site is available in English (default) and Indonesian (under /id).

## Topics
Flutter, Dart, Android, iOS, Kotlin, Swift, platform channels, native SDK
integration, plugin and SDK design, mobile architecture, modularization,
developer tooling, CI/CD, staff engineering, AI-assisted software engineering.

## Contact
Email: owner@solusibejo.com
GitHub: https://github.com/chandrabezzo
LinkedIn: https://www.linkedin.com/in/chandra-abdul-fattah/
Articles (published on Medium, not hosted here): https://medium.com/@chandrabezzo

## Pages (English)
${en.map(u => `- ${u}`).join('\n')}

## Pages (Indonesian)
${id.map(u => `- ${u}`).join('\n')}
`

  await writeFile(path.join(outDir, 'llms.txt'), body)
  return Buffer.byteLength(body)
}
