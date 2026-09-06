import type { Metadata } from 'next'
import { profile } from '@/data/profile'
import { siteMeta, siteUrl } from '@/lib/site'
import type { Lang } from '@/lib/i18n'

export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: { default: siteMeta[lang].title, template: `%s | ${profile.name}` },
    description: siteMeta[lang].description,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    manifest: '/site.webmanifest',
    icons: { icon: '/logo.svg', apple: '/logo.svg' },
  }
}
