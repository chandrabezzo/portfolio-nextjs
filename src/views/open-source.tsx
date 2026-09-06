import { openSource, OSS_CATEGORIES, categoryLabel } from '@/data/open-source'
import { Container, Section, PageTitle } from '@/components/ui/primitives'
import { OpenSourceCard } from '@/components/cards'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { t, ui, type Lang } from '@/lib/i18n'

export function OpenSourceView({ lang }: { lang: Lang }) {
  return (
    <SiteShell lang={lang} path="/open-source">
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

          {/* Anchors, not JS filtering: crawlable and works without hydration. */}
          <nav aria-label={t(ui.labelCategories, lang)} className="mt-8 flex flex-wrap gap-x-5 gap-y-1">
            {OSS_CATEGORIES.map((category) => (
              <a key={category} href={`#${category}`} className="link-underline tap py-1 text-sm">
                {t(categoryLabel[category], lang)}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
            {OSS_CATEGORIES.map((category) => {
              const items = openSource.filter((p) => p.category === category)
              if (!items.length) return null
              return (
                <section
                  key={category}
                  id={category}
                  aria-label={t(categoryLabel[category], lang)}
                  className="scroll-mt-24"
                >
                  <h2 className="font-display text-display-sm">
                    {t(categoryLabel[category], lang)}
                  </h2>
                  <div className="mt-6 grid gap-x-12 sm:mt-8 sm:grid-cols-2">
                    {items.map((item) => (
                      <OpenSourceCard key={item.slug} item={item} lang={lang} />
                    ))}
                  </div>
                </section>
              )
            })}
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
