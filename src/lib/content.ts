import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'
import { caseStudyFrontmatterSchema, type CaseStudyFrontmatter } from '@/schemas/content'
import { DEFAULT_LANG, type Lang } from '@/lib/i18n'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

export interface Doc<T> {
  slug: string
  frontmatter: T
  body: string
  readingTime: number
}

function readCollection<T>(lang: Lang, dir: string, schema: z.ZodType<T>): Doc<T>[] {
  const full = path.join(CONTENT_DIR, lang, dir)
  if (!fs.existsSync(full)) return []

  const seen = new Set<string>()

  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      if (seen.has(slug)) throw new Error(`Duplicate slug "${slug}" in src/content/${lang}/${dir}`)
      seen.add(slug)

      const { data, content } = matter(fs.readFileSync(path.join(full, file), 'utf8'))
      const parsed = schema.safeParse(data)
      if (!parsed.success) {
        // Fail the build rather than deploy structurally invalid content.
        throw new Error(
          `Invalid frontmatter in src/content/${lang}/${dir}/${file}:\n` +
            parsed.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n'),
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
        (a.frontmatter as { publishedAt: string }).publishedAt,
      ),
    )
}

export const getAllWork = (lang: Lang): Doc<CaseStudyFrontmatter>[] =>
  readCollection(lang, 'work', caseStudyFrontmatterSchema)

export const getWorkBySlug = (lang: Lang, slug: string) =>
  getAllWork(lang).find((d) => d.slug === slug)

/**
 * Slugs are shared across languages so /work/x and /id/work/x are translations
 * of each other, which is what hreflang requires.
 */
export const getWorkSlugs = (): string[] => getAllWork(DEFAULT_LANG).map((d) => d.slug)
