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
    disambiguatingDescription: experience
      .flatMap(job =>
        job.positions
          .filter(position => position.period.endsWith('Present'))
          .map(position => `${t(position.title, lang)} — ${job.company}`)
      )
      .join('; '),
    url: siteUrl,
    image: `${siteUrl}/profile/me.jpg`,
    email: `mailto:${profile.email}`,
    sameAs: socialLinks.map(l => l.href),
    knowsLanguage: ['en', 'id'],
    knowsAbout: expertise.map(e => t(e.title, lang)),
    alumniOf: education.map(e => ({
      '@type': 'EducationalOrganization',
      name: e.institution,
    })),
    // occupationLocation accepts AdministrativeArea, not an employer.
    // https://schema.org/worksFor — current roles only; history stays in About.
    worksFor: experience
      .filter(job => job.positions.some(position => position.period.endsWith('Present')))
      .map(job => ({
        '@type': 'Organization',
        name: job.company,
        ...(job.companyUrl ? { url: job.companyUrl } : {}),
      })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bandung',
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
    alternateName: profile.brand,
    description: siteMeta[lang].description,
    inLanguage: ['en', 'id'],
    publisher: { '@id': personId },
  }
}

export function profilePageSchema(lang: Lang, path = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}${langPath(lang, path)}#profilepage`,
    url: `${siteUrl}${langPath(lang, path)}`,
    inLanguage: lang,
    mainEntity: { '@id': personId },
  }
}

/** Describes the consulting practice for "who can help me with X" style queries. */
export function serviceSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#consulting`,
    name: `${profile.brand} — ${t(profile.role, lang)}`,
    description: t(profile.summary, lang),
    url: siteUrl,
    provider: { '@id': personId },
    serviceType: expertise.map(e => t(e.title, lang)),
    // https://schema.org/availableLanguage supports ServiceChannel.
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteUrl}${langPath(lang, '/contact')}`,
      availableLanguage: ['en', 'id'],
    },
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
    image: `${siteUrl}/social/${lang}-${path.split('/').pop()}.png`,
    mainEntityOfPage: url,
    inLanguage: lang,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: { '@type': 'Person', '@id': personId, name: profile.name, url: `${siteUrl}/about` },
    publisher: { '@type': 'Person', '@id': personId, name: profile.name, url: siteUrl },
  }
}

type Node = Record<string, unknown>

const SCHEMA_CONTEXT = 'https://schema.org'

/**
 * Emits a single top-level OBJECT, never a bare array.
 *
 * A top-level array is legal JSON-LD, but many consumers (SEO extensions,
 * scrapers, some validators) read `data["@context"]` straight off the parsed
 * value. Against an array that is `undefined`, and the next `.toLowerCase()`
 * throws "undefined is not an object". Wrapping multiple nodes in `@graph`
 * keeps `@context` at the top level, which is also the shape Google documents
 * for multiple entities on one page.
 */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const nodes = (Array.isArray(schema) ? schema : [schema]) as Node[]

  const payload =
    nodes.length === 1
      ? { '@context': SCHEMA_CONTEXT, ...stripContext(nodes[0] as Node) }
      : {
          '@context': SCHEMA_CONTEXT,
          '@graph': nodes.map(stripContext),
        }

  return (
    <script
      type='application/ld+json'
      // Escape < so a string containing </script> cannot close the tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, '\\u003c') }}
    />
  )
}

/** @context belongs on the wrapper once, not repeated on every node. */
function stripContext(node: Node): Node {
  if (!node || typeof node !== 'object') return node
  const rest = { ...node }
  delete rest['@context']
  return rest
}
