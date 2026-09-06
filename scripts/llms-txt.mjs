// Emits /llms.txt: a plain-text summary of who this site is about and what it
// contains, in the emerging llms.txt convention. Cheap to maintain because it
// is generated from the built sitemap rather than hand-written.
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE = 'https://solusibejo.com'

export async function writeLlmsTxt(outDir) {
  const sitemap = await readFile(path.join(outDir, 'sitemap.xml'), 'utf8')
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

  const en = urls.filter((u) => !u.startsWith(`${SITE}/id`))
  const id = urls.filter((u) => u.startsWith(`${SITE}/id`))

  const body = `# Chandra Abdul Fattah

> Software Engineering Consultant based in Sumedang, West Java, Indonesia.
> Specializes in mobile engineering: Flutter, native Android and iOS
> integration, SDK and plugin engineering, software architecture, developer
> tooling, and AI-augmented engineering workflows.

Chandra has built software since 2014, works as a Staff Engineer on mobile at
Evermos, and runs an independent engineering practice as Solusi Bejo. He
maintains 20+ open-source Dart and Flutter packages on pub.dev, including the
screen_time plugin for device usage management on Android and iOS.

This site is available in English (default) and Indonesian (under /id).

## Topics
Flutter, Dart, Android, iOS, Kotlin, Swift, platform channels, native SDK
integration, plugin and SDK design, mobile architecture, modularization,
developer tooling, CI/CD, staff engineering, AI-assisted software engineering.

## Contact
Email: chandrashibezzo@gmail.com
GitHub: https://github.com/chandrabezzo
LinkedIn: https://www.linkedin.com/in/chandra-abdul-fattah/
Articles: https://medium.com/@chandrabezzo

## Pages (English)
${en.map((u) => `- ${u}`).join('\n')}

## Pages (Indonesian)
${id.map((u) => `- ${u}`).join('\n')}
`

  await writeFile(path.join(outDir, 'llms.txt'), body)
  return Buffer.byteLength(body)
}
