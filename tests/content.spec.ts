import { test, expect } from '@playwright/test'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { getAllWork, getWorkBySlug, getWorkSlugs } from '../src/lib/content'

let root: string
test.beforeEach(() => {
  root = mkdtempSync(path.join(tmpdir(), 'portfolio-content-'))
})
test.afterEach(() => {
  rmSync(root, { recursive: true, force: true })
})

function doc(lang: string, slug: string, draft = false, title = 'Example case study') {
  mkdirSync(path.join(root, lang, 'work'), { recursive: true })
  writeFileSync(
    path.join(root, lang, 'work', `${slug}.mdx`),
    `---
title: "${title}"
summary: Example summary
publishedAt: '2026-09-09'
role: Engineer
company: Example
timeline: '2026'
technologies: [Flutter]
draft: ${draft}
---
Example body.
`
  )
}

test('drafts are absent from listings, page lookup, and generated slugs', () => {
  for (const lang of ['en', 'id']) {
    doc(lang, 'published')
    doc(lang, 'private-draft', true)
  }
  expect(getAllWork('en', root).map(d => d.slug)).toEqual(['published'])
  expect(getWorkBySlug('id', 'private-draft', root)).toBeUndefined()
  expect(getWorkSlugs(root)).toEqual(['published'])
})

test('a published translation paired with a draft fails instead of advertising a 404', () => {
  doc('en', 'incomplete')
  doc('id', 'incomplete', true)
  expect(() => getWorkSlugs(root)).toThrow('src/content/id/work/incomplete.mdx')
})

test('a missing translation fails the locale contract', () => {
  doc('en', 'missing')
  expect(() => getWorkSlugs(root)).toThrow('src/content/id/work/missing.mdx')
})

test('invalid frontmatter fails instead of publishing incomplete metadata', () => {
  doc('en', 'invalid', false, '')
  expect(() => getAllWork('en', root)).toThrow('Invalid frontmatter')
})
