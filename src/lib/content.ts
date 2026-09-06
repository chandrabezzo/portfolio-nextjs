import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'
import {
  caseStudyFrontmatterSchema,
  insightFrontmatterSchema,
  type CaseStudyFrontmatter,
  type InsightFrontmatter,
} from '@/schemas/content'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

export interface Doc<T> {
  slug: string
  frontmatter: T
  body: string
  /** Minutes, at ~200 wpm. Displayed on articles per brief §28. */
  readingTime: number
}

function readCollection<T>(dir: string, schema: z.ZodType<T>): Doc<T>[] {
  const full = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(full)) return []

  const seen = new Set<string>()

  const docs = fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')

      // Duplicate slugs would silently shadow each other in the static export.
      if (seen.has(slug)) throw new Error(`Duplicate slug "${slug}" in src/content/${dir}`)
      seen.add(slug)

      const raw = fs.readFileSync(path.join(full, file), 'utf8')
      const { data, content } = matter(raw)

      const parsed = schema.safeParse(data)
      if (!parsed.success) {
        // Fail the build rather than deploy structurally invalid content (brief §10).
        throw new Error(
          `Invalid frontmatter in src/content/${dir}/${file}:\n` +
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
    .filter((doc) => !(doc.frontmatter as { draft?: boolean }).draft)

  return docs.sort((a, b) =>
    (b.frontmatter as { publishedAt: string }).publishedAt.localeCompare(
      (a.frontmatter as { publishedAt: string }).publishedAt,
    ),
  )
}

export const getAllWork = (): Doc<CaseStudyFrontmatter>[] =>
  readCollection('work', caseStudyFrontmatterSchema)

export const getAllInsights = (): Doc<InsightFrontmatter>[] =>
  readCollection('insights', insightFrontmatterSchema)

export const getWorkBySlug = (slug: string) => getAllWork().find((d) => d.slug === slug)
export const getInsightBySlug = (slug: string) => getAllInsights().find((d) => d.slug === slug)
