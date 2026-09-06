import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { expertise } from '@/data/expertise'
import { siteMeta, siteUrl } from '@/lib/site'
import { langPath, t, type Lang } from '@/lib/i18n'

const personId = `${siteUrl}/#person`

/**
 * Only claims backed by visible content on the page. `skills` (used by the old
 * site) is not a schema.org property — folded into knowsAbout.
 */
export function personSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    jobTitle: t(profile.role, lang),
    description: siteMeta[lang].description,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: socialLinks.map((l) => l.href),
    knowsLanguage: ['en', 'id'],
    knowsAbout: expertise.map((e) => t(e.title, lang)),
    alumniOf: education.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e.institution,
    })),
    hasOccupation: experience.flatMap((job) =>
      job.positions.map((position) => ({
        '@type': 'Occupation',
        name: t(position.title, lang),
        occupationLocation: { '@type': 'Organization', name: job.company },
      })),
    ),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sumedang',
      addressRegion: 'West Java',
      addressCountry: 'ID',
    },
  }
}

export function websiteSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: profile.name,
    description: siteMeta[lang].description,
    inLanguage: ['en', 'id'],
    publisher: { '@id': personId },
  }
}

export function profilePageSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}${langPath(lang, '/')}#profilepage`,
    url: `${siteUrl}${langPath(lang, '/')}`,
    inLanguage: lang,
    mainEntity: { '@id': personId },
  }
}

/** Describes the consulting practice for "who can help me with X" style queries. */
export function serviceSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#practice`,
    name: profile.brand,
    description: t(profile.summary, lang),
    url: siteUrl,
    founder: { '@id': personId },
    areaServed: 'Worldwide',
    knowsAbout: expertise.map((e) => t(e.title, lang)),
    availableLanguage: ['English', 'Indonesian'],
  }
}

export function breadcrumbSchema(lang: Lang, trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${langPath(lang, item.path)}`,
    })),
  }
}

export function articleSchema({
  lang,
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: {
  lang: Lang
  title: string
  description: string
  path: string
  publishedAt: string
  updatedAt?: string
}) {
  const url = `${siteUrl}${langPath(lang, path)}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: lang,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: { '@id': personId },
    publisher: { '@id': personId },
  }
}

export function JsonLd({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
