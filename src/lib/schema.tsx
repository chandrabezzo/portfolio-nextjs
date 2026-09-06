import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { siteConfig, siteUrl } from '@/lib/site'

/**
 * Only claims that are backed by visible content on the page (brief §42).
 * `skills` was used previously and is not a schema.org property — folded into knowsAbout.
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: profile.name,
  jobTitle: profile.role,
  description: siteConfig.description,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  sameAs: socialLinks.map((l) => l.href),
  knowsAbout: [
    'Software Engineering',
    'Mobile Engineering',
    'Flutter',
    'Android',
    'iOS',
    'Native Integration',
    'SDK Development',
    'Plugin Development',
    'Software Architecture',
    'Developer Tooling',
    'AI-Augmented Software Engineering',
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: profile.alumniOf },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sumedang',
    addressRegion: 'West Java',
    addressCountry: 'ID',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { '@id': `${siteUrl}/#person` },
}

export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profilepage`,
  url: siteUrl,
  mainEntity: { '@id': `${siteUrl}/#person` },
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function articleSchema({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: {
  title: string
  description: string
  path: string
  publishedAt: string
  updatedAt?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${siteUrl}${path}`,
    mainEntityOfPage: `${siteUrl}${path}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: { '@id': `${siteUrl}/#person` },
    publisher: { '@id': `${siteUrl}/#person` },
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
