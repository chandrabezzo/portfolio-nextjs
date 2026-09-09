import Link from 'next/link'
import './globals.css'
import { RootHtml } from '@/components/root-html'
import { SiteShell } from '@/components/site-shell'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { siteUrl } from '@/lib/site'
import { profile } from '@/data/profile'
import { langPath, t, ui, DEFAULT_LANG } from '@/lib/i18n'

// Next resolves the app/opengraph-image file convention against the default
// metadataBase on the global-not-found path, not the one declared below, which
// shipped http://localhost:3000 image URLs into out/404.html. Absolute URLs
// bypass metadataBase entirely, and declaring the images here overrides the
// convention. The .png suffix matches what scripts/postbuild.mjs emits.
const ogImage = {
  url: `${siteUrl}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: `${profile.name} — ${profile.role.en}`,
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '404',
  robots: { index: false, follow: true },
  openGraph: { images: [ogImage] },
  twitter: { card: 'summary_large_image' as const, images: [ogImage.url] },
}

/**
 * With multiple root layouts, global-not-found bypasses layout composition and
 * renders its own <html>. This is the file GitHub Pages serves as 404.html for
 * every unknown URL, so it has to be the real designed page — not Next's
 * default — and it must work for visitors arriving at an /id/... path too.
 *
 * It reuses SiteShell rather than re-assembling the chrome: hand-rolling nav
 * and <main> here is how the 404 ended up as the one route with no skip link.
 */
export default function NotFound() {
  const lang = DEFAULT_LANG

  return (
    <RootHtml lang={lang}>
      <SiteShell lang={lang} path="/">
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
      </SiteShell>
    </RootHtml>
  )
}
