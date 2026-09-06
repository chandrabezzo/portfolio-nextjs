import { openSource } from '@/data/open-source'
import { projects } from '@/data/projects'
import { Container, Section, PageTitle } from '@/components/ui/primitives'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { t, ui, type Lang } from '@/lib/i18n'

interface Row {
  year: number | string
  title: string
  madeAt: string
  built: string[]
  href?: string
  hrefLabel?: string
}

export function ArchiveView({ lang }: { lang: Lang }) {
  const rows: Row[] = [
    ...projects.map((p) => ({
      year: p.year ?? '—',
      title: p.title,
      madeAt: p.company ?? '—',
      built: p.technologies,
      href: p.links?.playStore ?? p.links?.appStore ?? p.links?.website,
      hrefLabel: p.links?.playStore
        ? t(ui.labelPlayStore, lang)
        : p.links?.appStore
          ? t(ui.labelAppStore, lang)
          : t(ui.labelWebsite, lang),
    })),
    ...openSource.map((p) => ({
      year: p.year,
      title: p.title,
      madeAt: p.madeAt,
      built: p.technologies,
      href: p.links.pubDev ?? p.links.github,
      hrefLabel: p.links.pubDev ? 'pub.dev' : 'GitHub',
    })),
  ].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <SiteShell lang={lang} path="/archive">
      <Section label={t(ui.navArchive, lang)}>
        <Container>
          <PageTitle
            eyebrow={t(ui.eyebrowArchive, lang)}
            title={lang === 'id' ? 'Semuanya' : 'Everything'}
            lead={
              lang === 'id'
                ? 'Daftar lengkap — aplikasi, paket, plugin, dan kontribusi upstream. Sebagian aplikasi klien sudah ditarik dari toko oleh pemiliknya.'
                : 'The complete list — applications, packages, plugins, and upstream contributions. Some client applications have since been withdrawn from the stores by their owners.'
            }
          />

          {/* Table scrolls inside its own container so the page never scrolls sideways. */}
          <div className="mt-12 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <caption className="sr-only">{t(ui.labelAllProjectsByYear, lang)}</caption>
              <thead>
                <tr className="border-b border-line-strong">
                  {[
                    t(ui.labelYear, lang),
                    t(ui.labelTitle, lang),
                    t(ui.labelMadeAt, lang),
                    t(ui.labelBuiltWith, lang),
                    t(ui.labelLink, lang),
                  ].map((h) => (
                    <th key={h} scope="col" className="eyebrow py-3 pr-6 font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.title}-${row.year}`} className="border-b border-line align-top">
                    <td className="whitespace-nowrap py-4 pr-6 font-mono text-sm text-ink-subtle">
                      {row.year}
                    </td>
                    <td className="py-4 pr-6 font-medium">{row.title}</td>
                    <td className="py-4 pr-6 text-sm text-ink-muted">{row.madeAt}</td>
                    <td className="py-4 pr-6 text-sm text-ink-muted">{row.built.join(' · ')}</td>
                    <td className="py-4 text-sm">
                      {row.href ? (
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                        >
                          {row.hrefLabel}
                        </a>
                      ) : (
                        <span className="text-ink-subtle">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <JsonLd
            schema={breadcrumbSchema(lang, [
              { name: 'Home', path: '/' },
              { name: t(ui.navArchive, lang), path: '/archive' },
            ])}
          />
        </Container>
      </Section>
    </SiteShell>
  )
}
