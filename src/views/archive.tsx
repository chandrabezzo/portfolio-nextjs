import { openSource } from '@/data/open-source'
import { projects } from '@/data/projects'
import { Container, Section, PageTitle, TagRow } from '@/components/ui/primitives'
import { ArrowUpRight } from 'lucide-react'
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
    ...projects.map(p => ({
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
    ...openSource.map(p => ({
      year: p.year,
      title: p.title,
      madeAt: p.madeAt,
      built: p.technologies,
      href: p.links.pubDev ?? p.links.github,
      hrefLabel: p.links.pubDev ? 'pub.dev' : 'GitHub',
    })),
  ].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <SiteShell lang={lang} path='/archive'>
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

          <div className='mt-10 space-y-4 md:hidden'>
            {rows.map(row => (
              <article key={`${row.title}-${row.year}`} className='surface-card p-5'>
                <p className='font-mono text-xs text-accent'>{row.year}</p>
                <h2 className='mt-2 text-lg font-semibold tracking-tight'>{row.title}</h2>
                <p className='mt-2 text-sm text-ink-muted'>{row.madeAt}</p>
                <div className='mt-4'>
                  <TagRow items={row.built} />
                </div>
                {row.href ? (
                  <a
                    href={row.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link-underline mt-4 min-h-11 text-sm'
                  >
                    {row.hrefLabel}
                    <ArrowUpRight className='h-4 w-4' aria-hidden />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
          {/* A table supports comparison on wider screens; mobile uses the same rows as cards. */}
          <div
            className='mt-12 hidden overflow-x-auto rounded-lg border border-line bg-surface md:block'
            tabIndex={0}
            role='region'
            aria-label={t(ui.labelAllProjectsByYear, lang)}
          >
            <table className='archive-table w-full min-w-[44rem] border-collapse text-left [&_td]:px-5 [&_th]:px-5'>
              <caption className='sr-only'>{t(ui.labelAllProjectsByYear, lang)}</caption>
              <thead>
                <tr className='border-b border-line-strong bg-raised'>
                  {[
                    t(ui.labelYear, lang),
                    t(ui.labelTitle, lang),
                    t(ui.labelMadeAt, lang),
                    t(ui.labelBuiltWith, lang),
                    t(ui.labelLink, lang),
                  ].map(h => (
                    <th key={h} scope='col' className='eyebrow py-3 pr-6 font-normal'>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={`${row.title}-${row.year}`} className='border-b border-line align-top'>
                    <td className='whitespace-nowrap py-4 pr-6 font-mono text-sm text-ink-subtle'>
                      {row.year}
                    </td>
                    <td className='py-4 pr-6 font-medium'>{row.title}</td>
                    <td className='py-4 pr-6 text-sm text-ink-muted'>{row.madeAt}</td>
                    <td className='py-4 pr-6 text-sm text-ink-muted'>{row.built.join(' · ')}</td>
                    <td className='py-4 text-sm'>
                      {row.href ? (
                        <a
                          href={row.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='link-underline'
                        >
                          {row.hrefLabel}
                        </a>
                      ) : (
                        <span className='text-ink-subtle'>—</span>
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
