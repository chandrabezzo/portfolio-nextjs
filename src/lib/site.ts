import type { Metadata } from 'next'
import { profile } from '@/data/profile'
import { LANG_TAG, langPath, type Lang, type L10n } from '@/lib/i18n'

export const siteUrl = profile.url

export const siteMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Chandra Abdul Fattah | Flutter & Mobile Engineering Consultant',
    description:
      'Flutter and mobile engineering consultant in Indonesia. Staff Engineer at Evermos, with expertise in native Android/iOS integration, SDKs, and architecture.',
  },
  id: {
    title: 'Chandra Abdul Fattah | Konsultan Flutter & Mobile Engineering',
    description:
      'Konsultan Flutter dan mobile engineering di Indonesia. Staff Engineer di Evermos, berpengalaman dalam integrasi native Android/iOS, SDK, dan arsitektur.',
  },
}

/**
 * Every indexable route gets a self-referencing canonical plus hreflang for both
 * languages and an x-default, helping search engines identify translations.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  type = 'website',
  publishedTime,
  modifiedTime,
  image,
}: {
  lang: Lang
  /** Language-agnostic path, e.g. '/about'. */
  path: string
  title: string
  description: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  image?: { path: string; alt: string }
}): Metadata {
  const url = `${siteUrl}${langPath(lang, path)}`

  // Referenced absolutely and explicitly: the opengraph-image file convention
  // lives outside the (en)/(id) route groups, so it does not attach on its own.
  const ogImage = {
    url: `${siteUrl}${image?.path ?? '/opengraph-image.png'}`,
    width: 1200,
    height: 630,
    alt: image?.alt ?? `${profile.name} — ${profile.role[lang]}`,
  }

  return {
    metadataBase: new URL(siteUrl),
    title: path === '/' ? { absolute: title } : title,
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
