import type { Metadata } from 'next'
import { profile } from '@/data/profile'
import { LANG_TAG, langPath, type Lang, type L10n } from '@/lib/i18n'

export const siteUrl = profile.url

export const siteMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Chandra Abdul Fattah | Software Engineering & Mobile Consultant',
    description:
      'Software engineer and technology consultant specializing in Flutter, Android/iOS integrations, mobile architecture, SDKs, plugins, developer tooling, and AI-augmented engineering.',
  },
  id: {
    title: 'Chandra Abdul Fattah | Konsultan Rekayasa Perangkat Lunak & Mobile',
    description:
      'Software engineer dan konsultan teknologi dengan spesialisasi Flutter, integrasi Android/iOS, arsitektur mobile, SDK, plugin, developer tooling, dan rekayasa berbantu AI.',
  },
}

/**
 * Every indexable route gets a self-referencing canonical plus hreflang for both
 * languages and an x-default. Without the alternates, Google treats /about and
 * /id/about as competing duplicates instead of translations.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  type = 'website',
  publishedTime,
  modifiedTime,
}: {
  lang: Lang
  /** Language-agnostic path, e.g. '/about'. */
  path: string
  title: string
  description: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}): Metadata {
  const url = `${siteUrl}${langPath(lang, path)}`

  // Referenced absolutely and explicitly: the opengraph-image file convention
  // lives outside the (en)/(id) route groups, so it does not attach on its own.
  const ogImage = {
    url: `${siteUrl}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: `${profile.name} — ${profile.role[lang]}`,
  }

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [LANG_TAG.en]: `${siteUrl}${langPath('en', path)}`,
        [LANG_TAG.id]: `${siteUrl}${langPath('id', path)}`,
        'x-default': `${siteUrl}${langPath('en', path)}`,
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: profile.name,
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: lang === 'id' ? 'en_US' : 'id_ID',
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@BezzoKecil',
      images: [ogImage.url],
    },
  }
}

export const pick = (value: L10n, lang: Lang) => value[lang]
