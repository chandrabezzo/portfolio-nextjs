import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'
import { caseStudyFrontmatterSchema, type CaseStudyFrontmatter } from '@/schemas/content'
import { DEFAULT_LANG, LANGS, type Lang } from '@/lib/i18n'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

export interface Doc<T> {
  slug: string
  frontmatter: T
  body: string
  readingTime: number
}

function readCollection<T>(
  lang: Lang,
  dir: string,
  schema: z.ZodType<T>,
  contentDir: string
): Doc<T>[] {
  const full = path.join(contentDir, lang, dir)
  if (!fs.existsSync(full)) return []

  const seen = new Set<string>()

  return fs
    .readdirSync(full)
    .filter(f => f.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      if (seen.has(slug)) throw new Error(`Duplicate slug "${slug}" in src/content/${lang}/${dir}`)
      seen.add(slug)

      const { data, content } = matter(fs.readFileSync(path.join(full, file), 'utf8'))
      const parsed = schema.safeParse(data)
      if (!parsed.success) {
        // Fail the build rather than deploy structurally invalid content.
        throw new Error(
          `Invalid frontmatter in src/content/${lang}/${dir}/${file}:\n` +
            parsed.error.issues.map(i => `  - ${i.path.join('.')}: ${i.message}`).join('\n')
        )
      }

      return {
        slug,
        frontmatter: parsed.data,
        body: content,
        readingTime: Math.max(1, Math.round(content.trim().split(/\s+/).length / 200)),
      }
    })
    .sort((a, b) =>
      (b.frontmatter as { publishedAt: string }).publishedAt.localeCompare(
        (a.frontmatter as { publishedAt: string }).publishedAt
      )
    )
}

export const getAllWork = (lang: Lang, contentDir = CONTENT_DIR): Doc<CaseStudyFrontmatter>[] =>
  readCollection(lang, 'work', caseStudyFrontmatterSchema, contentDir).filter(
    doc => !doc.frontmatter.draft
  )

export const getWorkBySlug = (lang: Lang, slug: string, contentDir = CONTENT_DIR) =>
  getAllWork(lang, contentDir).find(d => d.slug === slug)

/**
 * Slugs are shared across languages so /work/x and /id/work/x are translations
 * of each other, which is what hreflang requires.
 *
 * Every locale must carry the same set. The sitemap and the hreflang alternates
 * both promise that /id/work/x exists for every /work/x, so a missing
 * translation is not a soft degradation — it publishes a link to a 404. Fail
 * the build instead, naming exactly which files are missing.
 */
export const getWorkSlugs = (contentDir = CONTENT_DIR): string[] => {
  const bySlug = LANGS.map(lang => ({ lang, slugs: getAllWork(lang, contentDir).map(d => d.slug) }))
  const all = [...new Set(bySlug.flatMap(x => x.slugs))].sort()

  const missing = bySlug.flatMap(({ lang, slugs }) =>
    all.filter(slug => !slugs.includes(slug)).map(slug => `src/content/${lang}/work/${slug}.mdx`)
  )

  if (missing.length) {
    throw new Error(
      'Published case studies must exist and be non-draft in every language — hreflang and the sitemap ' +
        'advertise both.\nMissing:\n' +
        missing.map(f => `  - ${f}`).join('\n')
    )
  }

  return getAllWork(DEFAULT_LANG, contentDir).map(d => d.slug)
}
