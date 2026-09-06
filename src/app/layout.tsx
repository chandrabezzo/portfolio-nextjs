import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { JsonLd, personSchema, websiteSchema } from '@/lib/schema'
import { siteConfig, siteUrl } from '@/lib/site'
import { profile } from '@/data/profile'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const display = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteConfig.title, template: `%s | ${profile.name}` },
  description: siteConfig.description,
  alternates: { canonical: siteUrl },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd schema={[personSchema, websiteSchema]} />
      </body>
    </html>
  )
}
