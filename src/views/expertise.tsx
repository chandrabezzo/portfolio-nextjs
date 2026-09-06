import Link from 'next/link'
import { expertise } from '@/data/expertise'
import { problems } from '@/data/problems'
import { Container, Section, SectionHeading, PageTitle, TagRow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function ExpertiseView({ lang }: { lang: Lang }) {
  return (
    <SiteShell lang={lang} path="/expertise">
      <Section label={t(ui.headExpertise, lang)}>
        <Container>
          <PageTitle
            eyebrow={t(ui.eyebrowExpertise, lang)}
            title={
              lang === 'id' ? 'Di mana saya berguna, dan mengapa.' : 'Where I am useful, and why.'
            }
            lead={
              lang === 'id'
                ? 'Setiap bidang di bawah ini adalah jenis masalah, bukan daftar teknologi. Teknologinya dicantumkan karena kebetulan itulah alat yang dibutuhkan masalah tersebut.'
                : 'Each area below is a kind of problem, not a technology list. The technologies are listed because they are the tools the problem happens to require.'
            }
          />

          <div className="mt-12 border-t border-line sm:mt-14">
            {expertise.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="grid scroll-mt-24 gap-3 border-b border-line py-8 sm:py-10 lg:grid-cols-[18rem_1fr] lg:gap-12"
              >
                <h2 className="font-display text-xl">{t(item.title, lang)}</h2>
                <div>
                  <p className="max-w-prose text-base leading-relaxed text-ink sm:text-lg">
                    {t(item.summary, lang)}
                  </p>
                  <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">
                    {t(item.detail, lang)}
                  </p>
                  <div className="mt-5">
                    <TagRow items={item.stack} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section label={t(ui.headEngagements, lang)} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowEngagements, lang)}
            title={t(ui.headEngagements, lang)}
          />
          <div className="mt-10 grid gap-px border-t border-line bg-line sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem.title.en} className="bg-ground p-6 sm:p-7">
                <h3 className="font-display text-lg">{t(problem.title, lang)}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{t(problem.description, lang)}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link href={langPath(lang, '/contact')}>{t(ui.ctaDiscussLong, lang)}</Link>
          </Button>
        </Container>
      </Section>

      <JsonLd
        schema={breadcrumbSchema(lang, [
          { name: 'Home', path: '/' },
          { name: t(ui.navExpertise, lang), path: '/expertise' },
        ])}
      />
    </SiteShell>
  )
}
