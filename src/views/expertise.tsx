import Link from 'next/link'
import { expertise } from '@/data/expertise'
import { problems } from '@/data/problems'
import { ArrowUpRight } from 'lucide-react'
import { Container, Section, SectionHeading, PageTitle, TagRow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function ExpertiseView({ lang }: { lang: Lang }) {
  return (
    <SiteShell lang={lang} path='/expertise'>
      <Section label={t(ui.headExpertise, lang)}>
        <Container>
          <PageTitle
            eyebrow={t(ui.eyebrowExpertise, lang)}
            title={
              lang === 'id' ? 'Di mana saya berguna, dan mengapa.' : 'Where I am useful, and why.'
            }
            lead={
              lang === 'id'
                ? 'Dari aplikasi mobile hingga SDK dan arsitektur: temukan keahlian yang relevan dengan masalah Anda, lalu lihat bukti pekerjaannya.'
                : 'From mobile applications to SDKs and architecture: find the expertise your problem needs, then explore the work behind it.'
            }
          />

          <div className='mt-12 border-t border-line sm:mt-14'>
            {expertise.map((item, index) => (
              <article
                key={item.slug}
                id={item.slug}
                className='grid scroll-mt-24 gap-3 border-b border-line py-8 sm:py-10 lg:grid-cols-[18rem_1fr] lg:gap-12'
              >
                <div>
                  <span
                    className='mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-accent-wash font-mono text-xs text-accent'
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className='font-sans text-xl font-semibold tracking-tight'>
                    {t(item.title, lang)}
                  </h2>
                </div>
                <div>
                  <p className='max-w-prose text-base leading-relaxed text-ink sm:text-lg'>
                    {t(item.summary, lang)}
                  </p>
                  <p className='mt-3 max-w-prose leading-relaxed text-ink-muted'>
                    {t(item.detail, lang)}
                  </p>
                  <div className='mt-5'>
                    <TagRow items={item.stack} />
                  </div>
                  {item.evidence && (
                    <ul className='mt-5 flex flex-wrap gap-x-6 gap-y-3'>
                      {item.evidence.map(proof => (
                        <li key={proof.href}>
                          <Link
                            href={
                              proof.href.startsWith('/') ? langPath(lang, proof.href) : proof.href
                            }
                            className='category-link'
                            {...(!proof.href.startsWith('/') && {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            })}
                          >
                            {t(proof.label, lang)}{' '}
                            <ArrowUpRight className='h-4 w-4 shrink-0' aria-hidden />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section label={t(ui.headEngagements, lang)} className='border-t border-line'>
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowEngagements, lang)}
            title={t(ui.headEngagements, lang)}
          />
          <div className='mt-10 grid gap-px border-t border-line bg-line sm:mt-12 sm:grid-cols-2 lg:grid-cols-3'>
            {problems.map(problem => (
              <div key={problem.title.en} className='bg-ground p-6 sm:p-7'>
                <h3 className='font-display text-lg'>{t(problem.title, lang)}</h3>
                <p className='mt-3 leading-relaxed text-ink-muted'>
                  {t(problem.description, lang)}
                </p>
              </div>
            ))}
          </div>
          <Button asChild className='mt-10'>
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
