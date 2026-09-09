import type { ReactNode } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { JsonLd, personSchema, websiteSchema } from '@/lib/schema'
import { t, ui, type Lang } from '@/lib/i18n'

/** Chrome shared by both language trees. */
export function SiteShell({
  lang,
  path,
  children,
}: {
  lang: Lang
  /** Language-agnostic path of the current page, e.g. '/about'. */
  path: string
  children: ReactNode
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-contrast"
      >
        {t(ui.labelSkipToContent, lang)}
      </a>
      <Navigation lang={lang} path={path} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang={lang} path={path} />
      <JsonLd schema={[personSchema(lang), websiteSchema(lang)]} />
    </>
  )
}
