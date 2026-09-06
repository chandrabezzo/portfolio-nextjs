import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

/** Brief §44: OAI-SearchBot must not be blocked. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
