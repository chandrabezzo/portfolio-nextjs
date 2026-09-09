import { z } from 'zod'

/** Frontmatter shared by every long-form document. */
const baseFrontmatter = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'publishedAt must be YYYY-MM-DD'),
  updatedAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'updatedAt must be YYYY-MM-DD')
    .optional(),
  draft: z.boolean().optional(),
})

export const caseStudyFrontmatterSchema = baseFrontmatter.extend({
  role: z.string().min(1),
  company: z.string().min(1),
  timeline: z.string().min(1),
  technologies: z.array(z.string().min(1)).min(1),
  /** Slugs of related open-source entries or other case studies. */
  related: z.array(z.string()).optional(),
})

export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatterSchema>
