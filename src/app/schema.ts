import { siteConfig } from './metadata'

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chandra Abdul Fattah',
  jobTitle: 'Full-Stack Engineer',
  description: siteConfig.description,
  url: siteConfig.url,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
  skills: [
    'Flutter',
    'React',
    'Next.js',
    'TypeScript',
    'Kotlin',
    'Android Development',
    'iOS Development',
    'Mobile Development',
    'Frontend Development',
    'Full Stack Development',
    'GraphQL',
    'REST API',
    'Kotlin Multiplatform',
  ],
  knowsAbout: [
    'Software Engineering',
    'Mobile App Development',
    'Web Development',
    'Cross-platform Development',
    'UI/UX Design',
    'System Architecture',
  ],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Indonesia'
    }
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universitas Nasional PASIM'
  }
}
