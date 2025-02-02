import { Metadata } from 'next'
import { getBasePath } from '@/utils/base-path'

export const siteConfig = {
  name: 'Solusi Bejo',
  description: 'I\'m Chandra Abdul Fattah, a passionate Full-Stack Engineer crafting scalable and efficient solutions with modern web/mobile technologies. Let\'s build something amazing together!',
  url: 'https://solusibejo.com',
  ogImage: '/logo.svg',
  author: 'Chandra Abdul Fattah',
  locale: 'en_US',
  links: {
    github: 'https://github.com/chandrabezzo',
    linkedin: 'https://linkedin.com/in/chandra-abdul-fattah',
  },
  alternates: {
    canonical: 'https://solusibejo.com',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  other: {
    'application-name': siteConfig.name,
    'generator': 'Next.js',
  },
  alternates: {
    canonical: siteConfig.alternates.canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Portfolio',
    'Web Development',
    'Chandra Abdul Fattah',
    'Mobile',
    'Frontend',
    'Developer',
    'Engineer',
    'Indonesian Engineer',
    'Remote Engineer',
    'Remote Mobile Engineer',
    'Remote Frontend Engineer',
    'Remote Engineer Indonesia',
    'Remote Mobile Engineer Indonesia',
    'Remote Frontend Engineer Indonesia',
    'Remote Indonesian Engineer',
    'Flutter',
    'Flutter Developer',
    'Android',
    'Android Developer',
    'iOS',
    'iOS Developer',
    'Kotlin',
    'Kotlin Developer',
    'Kotlin Multiplatform',
    'Kotlin Multiplatform Developer',
    'GraphQL',
    'GraphQL Developer',
    'REST',
    'REST Developer',
  ],
  authors: [
    {
      name: 'Chandra Abdul Fattah',
      url: siteConfig.url,
    },
  ],
  creator: 'Chandra Abdul Fattah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@BezzoKecil',
  },
  icons: {
    icon: getBasePath('/logo.svg'),
    shortcut: getBasePath('/logo.svg'),
    apple: getBasePath('/logo.svg'),
  },
  manifest: '/site.webmanifest',
  verification: {
    other: {
      'baidu-site-verification': ['your-baidu-verification-code'],  // Optional: Add if you want Baidu indexing
    },
  },
}
