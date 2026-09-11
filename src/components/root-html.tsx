import type { ReactNode } from 'react'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { themeInitScript } from '@/components/theme-toggle'
import { LANG_TAG, type Lang } from '@/lib/i18n'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

/**
 * Cookieless analytics, script-tag only. Rendered only when a domain is
 * configured, so local builds and `next dev` never report traffic. Outbound
 * clicks are tagged declaratively with `plausible-event-name=<event>` classes,
 * which keeps every component a server component.
 */
function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return null

  const host = (process.env.NEXT_PUBLIC_PLAUSIBLE_HOST?.trim() || 'https://plausible.io').replace(
    /\/+$/,
    ''
  )
  return (
    <script defer data-domain={domain} src={`${host}/js/script.outbound-links.tagged-events.js`} />
  )
}

/**
 * Shared by both root layouts. Each language tree renders its own <html> so the
 * lang attribute is correct per locale — a single shared root cannot do that.
 */
export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html
      lang={LANG_TAG[lang]}
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      {/*
        Valid in a root layout, and required here: the theme class must be set
        before first paint, which the metadata API cannot express.
      */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Analytics />
      </head>
      <body className='flex min-h-screen flex-col'>{children}</body>
    </html>
  )
}
