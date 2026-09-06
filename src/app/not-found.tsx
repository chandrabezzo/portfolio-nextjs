import Link from 'next/link'
import './globals.css'
import { RootHtml } from '@/components/root-html'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { siteUrl } from '@/lib/site'
import { langPath, t, ui, DEFAULT_LANG } from '@/lib/i18n'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '404',
  robots: { index: false, follow: true },
}

/**
 * With multiple root layouts there is no shared root, so the global not-found
 * renders its own <html>. This is the file GitHub Pages serves as 404.html for
 * every unknown URL, so it has to be the real designed page — not Next's
 * default — and it must work for visitors arriving at an /id/... path too.
 */
export default function NotFound() {
  const lang = DEFAULT_LANG

  return (
    <RootHtml lang={lang}>
      <Navigation lang={lang} path="/" />
      <main id="main" className="flex-1">
        <Section label="404">
          <Container narrow>
            <Eyebrow>404</Eyebrow>
            <h1 className="mt-5 font-display text-display-lg">{t(ui.notFoundTitle, lang)}</h1>
            <p className="mt-6 leading-relaxed text-ink-muted">{t(ui.notFoundBody, lang)}</p>
            <p className="mt-2 leading-relaxed text-ink-muted">{t(ui.notFoundBody, 'id')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={langPath(lang, '/')}>{t(ui.ctaGoHome, lang)}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={langPath(lang, '/work')}>{t(ui.navWork, lang)}</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={langPath('id', '/')}>Bahasa Indonesia</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer lang={lang} path="/" />
    </RootHtml>
  )
}
