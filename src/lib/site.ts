import type { Metadata } from 'next'
import { profile } from '@/data/profile'

export const siteUrl = profile.url

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | Software Engineering & Mobile Consultant`,
  description:
    'Software engineer and technology consultant specializing in Flutter, Android/iOS integrations, mobile architecture, SDKs, plugins, developer tooling, and AI-augmented engineering.',
  url: siteUrl,
}

/**
 * Every indexable route points its canonical at itself (brief §39) — the old site
 * pointed all of them at the homepage.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
}: {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}): Metadata {
  const url = `${siteUrl}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: profile.name,
      locale: 'en_US',
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@BezzoKecil',
    },
  }
}
