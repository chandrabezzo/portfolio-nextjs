import Link from 'next/link'
import { HomeHero } from '@/components/home-hero'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { ProblemList } from '@/components/problem-list'
import { expertise } from '@/data/expertise'
import { approach } from '@/data/approach'
import { testimonials, recommendationsUrl } from '@/data/testimonials'
import { featuredOpenSource } from '@/data/open-source'
import { getAllWork } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container, Section, SectionHeading, Eyebrow, TagRow } from '@/components/ui/primitives'
import { CaseStudyPreview, OpenSourceCard } from '@/components/cards'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, profilePageSchema, serviceSchema } from '@/lib/schema'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function HomeView({ lang }: { lang: Lang }) {
  const work = getAllWork(lang).slice(0, 3)
  const oss = featuredOpenSource.slice(0, 4)

  return (
    <SiteShell lang={lang} path='/'>
      <HomeHero lang={lang} />

      <Section id='selected-work' label={t(ui.headCaseStudies, lang)} className='scroll-mt-20'>
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowSelectedWork, lang)}
            title={t(ui.headCaseStudies, lang)}
            lead={t(ui.leadCaseStudies, lang)}
          />
          <div className='mt-10 space-y-5 sm:mt-12 sm:space-y-6'>
            {work.map(doc => (
              <CaseStudyPreview key={doc.slug} doc={doc} lang={lang} />
            ))}
          </div>
          <p className='mt-8 border-t border-line pt-8'>
            <Link href={langPath(lang, '/work')} className='link-underline text-sm font-medium'>
              {t(ui.ctaAllCases, lang)}
              <ArrowRight className='h-4 w-4' />
            </Link>
          </p>
        </Container>
      </Section>

      <Section
        id='problems'
        label={t(ui.headProblems, lang)}
        className='border-t border-line bg-surface'
      >
        <Container>
          <div className='grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20'>
            <SectionHeading
              eyebrow={t(ui.eyebrowWhatIDo, lang)}
              title={t(ui.headProblems, lang)}
              lead={t(ui.leadProblems, lang)}
            />
            <ProblemList lang={lang} />
          </div>
        </Container>
      </Section>

      <Section label={t(ui.headExpertise, lang)} className='border-t border-line'>
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowExpertise, lang)}
            title={t(ui.headExpertise, lang)}
          />
          <div className='mt-10 grid gap-x-12 gap-y-8 sm:mt-12 sm:grid-cols-2'>
            {expertise.slice(0, 4).map(item => (
              <div key={item.slug} className='border-t border-line pt-6'>
                <h3 className='font-sans text-lg font-semibold tracking-tight'>
                  {t(item.title, lang)}
                </h3>
                <p className='mt-2 leading-relaxed text-ink-muted'>{t(item.summary, lang)}</p>
                <div className='mt-4'>
                  <TagRow items={item.stack} />
                </div>
              </div>
            ))}
          </div>
          <p className='mt-10'>
            <Link
              href={langPath(lang, '/expertise')}
              className='link-underline text-sm font-medium'
            >
              {t(ui.ctaAllExpertise, lang)}
              <ArrowRight className='h-4 w-4' />
            </Link>
          </p>
        </Container>
      </Section>

      <Section label={t(ui.headOpenSource, lang)} className='border-t border-line bg-accent-wash'>
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowOpenSource, lang)}
            title={t(ui.headOpenSource, lang)}
            lead={t(ui.leadOpenSource, lang)}
          />
          <div className='mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6'>
            {oss.map(item => (
              <OpenSourceCard key={item.slug} item={item} lang={lang} />
            ))}
          </div>
          <p className='mt-8 border-t border-line pt-8'>
            <Link
              href={langPath(lang, '/open-source')}
              className='link-underline text-sm font-medium'
            >
              {t(ui.ctaAllOpenSource, lang)}
              <ArrowRight className='h-4 w-4' />
            </Link>
          </p>
        </Container>
      </Section>

      <Section deep label={t(ui.eyebrowAiEngineering, lang)}>
        <Container>
          <div className='max-w-narrow'>
            <Eyebrow className='mb-3 sm:mb-4'>{t(ui.eyebrowAiEngineering, lang)}</Eyebrow>
            <h2 className='text-balance font-display text-display-md'>
              {lang === 'id'
                ? 'Pertimbangan teknis, dipercepat oleh AI.'
                : 'Engineering judgment, accelerated by AI.'}
            </h2>
            <p className='mt-5 text-base leading-relaxed text-deep-muted sm:text-lg'>
              {lang === 'id'
                ? 'Saya memakai agen AI di sepanjang riset, implementasi, debugging, pengujian, tinjauan, dokumentasi, dan otomasi — sambil menjaga keputusan arsitektur, trade-off, dan kualitas tetap menjadi tanggung jawab pertimbangan teknis manusia.'
                : 'I use AI coding agents throughout research, implementation, debugging, testing, review, documentation, and automation — while keeping architecture decisions, trade-offs, and quality accountable to engineering judgment.'}
            </p>
          </div>

          <ol className='mt-12 grid gap-x-12 gap-y-2 sm:grid-cols-2'>
            {approach.map(step => (
              <li
                key={step.step}
                className='relative border-t border-deep-line py-6 pl-14 last:sm:col-span-2 last:sm:max-w-prose'
              >
                <span className='absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-deep-line font-mono text-xs text-deep-accent'>
                  {step.step}
                </span>
                <h3 className='mt-3 font-display text-lg'>{t(step.title, lang)}</h3>
                <p className='mt-2 text-sm leading-relaxed text-deep-muted'>
                  {t(step.description, lang)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {testimonials.length ? (
        <Section
          id='recommendations'
          label={t(ui.headTestimonials, lang)}
          className='scroll-mt-24 border-t border-line bg-surface'
        >
          <Container>
            <SectionHeading
              eyebrow={t(ui.eyebrowSocialProof, lang)}
              title={t(ui.headTestimonials, lang)}
              lead={
                lang === 'id'
                  ? 'Ringkasan rekomendasi yang diterima di LinkedIn. Setiap rekomendasi dapat dibaca pada sumber aslinya.'
                  : 'Summaries of recommendations received on LinkedIn. Each recommendation is linked to its original source.'
              }
            />
            <div className='mt-8 grid gap-8 sm:mt-10 md:grid-cols-3'>
              {testimonials.map(x => (
                <article
                  key={x.author}
                  className='flex flex-col rounded-lg border border-line bg-ground p-6'
                >
                  <p className='text-xs font-medium text-accent'>
                    {lang === 'id' ? 'Ringkasan rekomendasi' : 'Recommendation summary'}
                  </p>
                  <p className='mb-6 mt-4 leading-relaxed text-ink'>{t(x.summary, lang)}</p>
                  <div className='mt-auto border-t border-line pt-5'>
                    <h3 className='text-sm font-semibold'>
                      <a
                        href={x.authorUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-accent'
                      >
                        {x.author}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-ink-muted'>{t(x.context, lang)}</p>
                    <time dateTime={x.date} className='mt-2 block text-xs text-ink-subtle'>
                      {new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        timeZone: 'UTC',
                      }).format(new Date(x.date))}
                    </time>
                    <a
                      href={recommendationsUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='link-underline mt-3 min-h-11 text-sm'
                      aria-label={`${lang === 'id' ? 'Baca rekomendasi dari' : 'Read recommendation from'} ${x.author} ${lang === 'id' ? 'di' : 'on'} LinkedIn`}
                    >
                      {lang === 'id' ? 'Baca di LinkedIn' : 'Read on LinkedIn'}
                      <ArrowUpRight className='h-4 w-4' aria-hidden />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section label={t(ui.eyebrowAbout, lang)} className='border-t border-line'>
        <Container>
          <div className='grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16'>
            <SectionHeading
              eyebrow={t(ui.eyebrowAbout, lang)}
              title={lang === 'id' ? 'Tentang Chandra' : `About ${profile.name.split(' ')[0]}`}
            />
            <div className='max-w-prose space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg'>
              {lang === 'id' ? (
                <>
                  <p>
                    Saya mulai membangun software pada 2014, beralih ke Android native pada 2017,
                    dan menggunakan Flutter sejak sekitar 2019. Pengalaman saya mencakup produk
                    commerce, kesehatan, dan aplikasi konsumen.
                  </p>
                  <p>
                    Kini saya berfokus pada arsitektur mobile, integrasi native, SDK, dan developer
                    tooling. Saya juga berbagi pengalaman melalui kontribusi open source dan
                    mentoring.
                  </p>
                  <p>
                    Kini saya bekerja sebagai Staff Engineer di bidang mobile di Evermos, dan secara
                    independen lewat Solusi Bejo.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I started building software in 2014, moved into native Android in 2017, and
                    adopted Flutter around 2019. My experience spans commerce, healthcare, and
                    consumer applications.
                  </p>
                  <p>
                    Today my focus is mobile architecture, native integration, SDKs, and developer
                    tooling. I also share that experience through open-source contributions and
                    mentoring.
                  </p>
                  <p>
                    Today I work as a Staff Engineer on mobile at Evermos, and independently through
                    Solusi Bejo.
                  </p>
                </>
              )}
              <p>
                <Link
                  href={langPath(lang, '/about')}
                  className='link-underline text-base font-medium'
                >
                  {t(ui.ctaFullStory, lang)}
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section deep label={t(ui.eyebrowContact, lang)}>
        <Container>
          <div className='max-w-narrow'>
            <h2 className='text-balance font-display text-display-md'>
              {t(ui.headFinalCta, lang)}
            </h2>
            <p className='mt-5 text-base leading-relaxed text-deep-muted sm:text-lg'>
              {t(ui.leadFinalCta, lang)}
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button asChild size='lg' variant='deep'>
                <Link
                  href={langPath(lang, '/contact')}
                  className='plausible-event-name=contact_click'
                >
                  {t(ui.ctaDiscussLong, lang)}
                </Link>
              </Button>
              <Button asChild size='lg' variant='deep-outline'>
                <a href={profile.mediumUrl} target='_blank' rel='noopener noreferrer'>
                  {t(ui.ctaMedium, lang)}
                  <ArrowUpRight className='h-4 w-4' />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd schema={[profilePageSchema(lang), serviceSchema(lang)]} />
    </SiteShell>
  )
}
