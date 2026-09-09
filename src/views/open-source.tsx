import { openSource, OSS_CATEGORIES, categoryLabel, publisherInventory } from '@/data/open-source'
import { Container, Section, PageTitle } from '@/components/ui/primitives'
import { OpenSourceCard } from '@/components/cards'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { t, ui, type Lang } from '@/lib/i18n'

export function OpenSourceView({ lang }: { lang: Lang }) {
  return (
    <SiteShell lang={lang} path='/open-source'>
      <Section label={t(ui.headOpenSource, lang)}>
        <Container>
          <PageTitle
            eyebrow={t(ui.eyebrowOpenSource, lang)}
            title={
              lang === 'id'
                ? 'Open source sebagai bukti teknis.'
                : 'Open source as technical evidence.'
            }
            lead={
              lang === 'id'
                ? 'Paket yang saya rawat dan kontribusi yang saya kirim ke proyek orang lain. Masing-masing ada karena ada masalah nyata yang perlu diselesaikan — bukan untuk memperbanyak daftar repositori.'
                : 'Packages I maintain and contributions I have made upstream. Each one exists because a real problem needed solving — not to pad a repository list.'
            }
          />

          <div className='mt-10 grid gap-6 rounded-lg border border-line bg-accent-wash p-6 sm:grid-cols-3 sm:p-8'>
            <div>
              <p className='font-display text-3xl'>{publisherInventory.count}</p>
              <p className='mt-1 text-sm text-ink-muted'>
                {lang === 'id' ? 'Paket di publisher pub.dev' : 'Packages on the pub.dev publisher'}
              </p>
            </div>
            <div>
              <p className='font-display text-3xl'>
                {openSource.filter(p => p.contribution).length}
              </p>
              <p className='mt-1 text-sm text-ink-muted'>
                {lang === 'id' ? 'Kontribusi upstream pilihan' : 'Selected upstream contributions'}
              </p>
            </div>
            <a
              href={publisherInventory.url}
              target='_blank'
              rel='noopener noreferrer'
              className='section-jump self-center'
            >
              {lang === 'id' ? 'Verifikasi di pub.dev ↗' : 'Verify on pub.dev ↗'}
            </a>
          </div>
          <p className='mt-3 text-xs text-ink-subtle'>
            {lang === 'id'
              ? 'Inventaris diverifikasi 7 September 2026. Status pemeliharaan dapat berubah; lihat repository dan rilis terbaru.'
              : 'Inventory verified 7 September 2026. Maintenance status can change; check each repository and its latest release.'}
          </p>

          {/* Anchors, not JS filtering: crawlable and works without hydration. */}
          <div className='mt-10 grid items-start gap-10 lg:grid-cols-[13rem_minmax(0,1fr)]'>
            <nav
              aria-label={t(ui.labelCategories, lang)}
              className='flex flex-wrap gap-2 lg:sticky lg:top-24 lg:flex-col'
            >
              {OSS_CATEGORIES.map(category => (
                <a key={category} href={`#${category}`} className='category-link'>
                  {t(categoryLabel[category], lang)}
                </a>
              ))}
            </nav>

            <div className='min-w-0 space-y-14 sm:space-y-16'>
              {OSS_CATEGORIES.map(category => {
                const items = openSource.filter(p => p.category === category)
                if (!items.length) return null
                return (
                  <section
                    key={category}
                    id={category}
                    aria-label={t(categoryLabel[category], lang)}
                    className='scroll-mt-24'
                  >
                    <h2 className='font-display text-display-sm'>
                      {t(categoryLabel[category], lang)}
                    </h2>
                    <div className='mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6'>
                      {items.map(item => (
                        <OpenSourceCard key={item.slug} item={item} lang={lang} />
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </div>

          <JsonLd
            schema={breadcrumbSchema(lang, [
              { name: 'Home', path: '/' },
              { name: t(ui.navOpenSource, lang), path: '/open-source' },
            ])}
          />
        </Container>
      </Section>
    </SiteShell>
  )
}
