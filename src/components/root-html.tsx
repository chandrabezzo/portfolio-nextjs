import type { ReactNode } from 'react'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
import { themeInitScript } from '@/components/theme-toggle'
import { LANG_TAG, type Lang } from '@/lib/i18n'

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

/**
 * Shared by both root layouts. Each language tree renders its own <html> so the
 * lang attribute is correct per locale — a single shared root cannot do that.
 */
export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html
      lang={LANG_TAG[lang]}
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      {/*
        Valid in a root layout, and required here: the theme class must be set
        before first paint, which the metadata API cannot express.
      */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  )
}
