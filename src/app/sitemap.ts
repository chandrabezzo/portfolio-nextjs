import type { MetadataRoute } from 'next'
import { getAllInsights, getAllWork } from '@/lib/content'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1 },
    { path: '/work', priority: 0.9 },
    { path: '/expertise', priority: 0.8 },
    { path: '/open-source', priority: 0.8 },
    { path: '/insights', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/archive', priority: 0.4 },
  ].map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
  }))

  // Real last-modified dates for long-form content (brief §45).
  const docRoutes = [
    ...getAllWork().map((d) => ({ prefix: '/work', doc: d })),
    ...getAllInsights().map((d) => ({ prefix: '/insights', doc: d })),
  ].map(({ prefix, doc }) => ({
    url: `${siteUrl}${prefix}/${doc.slug}`,
    lastModified: new Date(doc.frontmatter.updatedAt ?? doc.frontmatter.publishedAt),
    priority: 0.9,
  }))

  return [...staticRoutes, ...docRoutes]
}
