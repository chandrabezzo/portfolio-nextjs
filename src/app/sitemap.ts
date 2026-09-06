import type { MetadataRoute } from 'next'
import { getAllWork, getWorkSlugs } from '@/lib/content'
import { siteUrl } from '@/lib/site'
import { LANGS, langPath, DEFAULT_LANG } from '@/lib/i18n'

export const dynamic = 'force-static'

const STATIC_ROUTES = [
  { path: '/', priority: 1 },
  { path: '/work', priority: 0.9 },
  { path: '/expertise', priority: 0.8 },
  { path: '/open-source', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
  { path: '/archive', priority: 0.4 },
]

/**
 * Both languages are listed, and every entry carries hreflang alternates so
 * search engines pair the translations instead of treating them as duplicates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      LANGS.map((lang) => [lang, `${siteUrl}${langPath(lang, path)}`]),
    ),
  })

  const workDates = new Map(
    getAllWork(DEFAULT_LANG).map((d) => [
      d.slug,
      new Date(d.frontmatter.updatedAt ?? d.frontmatter.publishedAt),
    ]),
  )

  const entries: MetadataRoute.Sitemap = []

  for (const lang of LANGS) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: `${siteUrl}${langPath(lang, route.path)}`,
        lastModified: new Date(),
        priority: route.priority,
        alternates: alternates(route.path),
      })
    }
    for (const slug of getWorkSlugs()) {
      const path = `/work/${slug}`
      entries.push({
        url: `${siteUrl}${langPath(lang, path)}`,
        lastModified: workDates.get(slug) ?? new Date(),
        priority: 0.9,
        alternates: alternates(path),
      })
    }
  }

  return entries
}
