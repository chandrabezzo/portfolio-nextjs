import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { problems } from '@/data/problems'
import { expertise } from '@/data/expertise'
import { approach } from '@/data/approach'
import { testimonials } from '@/data/testimonials'
import { featuredOpenSource } from '@/data/open-source'
import { getAllWork } from '@/lib/content'
import { Button } from '@/components/ui/button'
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  TagRow,
  Portrait,
} from '@/components/ui/primitives'
import { CaseStudyPreview, OpenSourceCard } from '@/components/cards'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, profilePageSchema, serviceSchema } from '@/lib/schema'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function HomeView({ lang }: { lang: Lang }) {
  const work = getAllWork(lang).slice(0, 3)
  const oss = featuredOpenSource.slice(0, 4)
  // Placeholder recommendations are review scaffolding, not content. The
  // section stays out of the rendered page until every entry is real.
  const realTestimonials = testimonials.filter((x) => !x.placeholder)

  return (
    <SiteShell lang={lang} path="/">
      {/* Hero — mobile order: name, headline, description, CTA, proof, portrait */}
      <section
        aria-label={t(ui.eyebrowAbout, lang)}
        className="border-b border-line py-12 sm:py-16 lg:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
            <div>
              <Eyebrow>{t(profile.role, lang)}</Eyebrow>
              <h1 className="mt-4 text-balance font-display text-display-xl sm:mt-5">
                {t(profile.headline, lang)}
              </h1>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
                {t(profile.intro, lang)}
              </p>
              <p className="mt-4 max-w-prose leading-relaxed text-ink-muted">
                {t(profile.summary, lang)}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link
                    href={langPath(lang, '/contact')}
                    className="plausible-event-name=contact_click"
                  >
                    {t(ui.ctaDiscussLong, lang)}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={langPath(lang, '/work')}>{t(ui.ctaExploreWork, lang)}</Link>
                </Button>
              </div>
            </div>

            <div className="order-last lg:order-none">
              <Portrait
                alt={`${profile.name}, ${t(profile.role, lang)}`}
                className="max-w-[16rem] sm:max-w-[19rem] lg:ml-auto"
              />
              <p className="mt-4 max-w-[19rem] font-mono text-xs leading-relaxed text-ink-subtle lg:ml-auto">
                {profile.name} · {t(profile.location, lang)}
              </p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:mt-14 lg:grid-cols-4">
            {profile.proof.map((item) => (
              <div key={item.label.en}>
                <dt className="sr-only">{t(item.label, lang)}</dt>
                <dd>
                  <span className="block font-display text-xl sm:text-2xl">
                    {t(item.value, lang)}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">{t(item.label, lang)}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section label={t(ui.headProblems, lang)}>
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowWhatIDo, lang)}
            title={t(ui.headProblems, lang)}
            lead={t(ui.leadProblems, lang)}
          />
          <div className="mt-10 grid gap-px border-t border-line bg-line sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem.title.en} className="bg-ground p-6 sm:p-7">
                <h3 className="font-display text-lg sm:text-xl">{t(problem.title, lang)}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {t(problem.description, lang)}
                </p>
                <p className="mt-5 font-mono text-xs text-ink-subtle">{problem.stack}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section label={t(ui.headCaseStudies, lang)} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowSelectedWork, lang)}
            title={t(ui.headCaseStudies, lang)}
            lead={t(ui.leadCaseStudies, lang)}
          />
          <div className="mt-10 sm:mt-12">
            {work.map((doc) => (
              <CaseStudyPreview key={doc.slug} doc={doc} lang={lang} />
            ))}
          </div>
          <p className="mt-8 border-t border-line pt-8">
            <Link href={langPath(lang, '/work')} className="link-underline text-sm font-medium">
              {t(ui.ctaAllCases, lang)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </Container>
      </Section>

      <Section label={t(ui.headExpertise, lang)} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowExpertise, lang)}
            title={t(ui.headExpertise, lang)}
          />
          <div className="mt-10 grid gap-x-12 gap-y-8 sm:mt-12 sm:grid-cols-2">
            {expertise.slice(0, 6).map((item) => (
              <div key={item.slug} className="border-t border-line pt-6">
                <h3 className="font-display text-lg">{t(item.title, lang)}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{t(item.summary, lang)}</p>
                <div className="mt-4">
                  <TagRow items={item.stack} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href={langPath(lang, '/expertise')}
              className="link-underline text-sm font-medium"
            >
              {t(ui.ctaAllExpertise, lang)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </Container>
      </Section>

      <Section label={t(ui.headOpenSource, lang)} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowOpenSource, lang)}
            title={t(ui.headOpenSource, lang)}
            lead={t(ui.leadOpenSource, lang)}
          />
          <div className="mt-10 grid gap-x-12 sm:mt-12 sm:grid-cols-2">
            {oss.map((item) => (
              <OpenSourceCard key={item.slug} item={item} lang={lang} />
            ))}
          </div>
          <p className="mt-8 border-t border-line pt-8">
            <Link
              href={langPath(lang, '/open-source')}
              className="link-underline text-sm font-medium"
            >
              {t(ui.ctaAllOpenSource, lang)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </Container>
      </Section>

      <Section deep label={t(ui.eyebrowAiEngineering, lang)}>
        <Container>
          <div className="max-w-narrow">
            <Eyebrow className="mb-3 sm:mb-4">{t(ui.eyebrowAiEngineering, lang)}</Eyebrow>
            <h2 className="text-balance font-display text-display-md">
              {lang === 'id'
                ? 'Pertimbangan teknis, dipercepat oleh AI.'
                : 'Engineering judgment, accelerated by AI.'}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-deep-muted sm:text-lg">
              {lang === 'id'
                ? 'Saya memakai agen AI di sepanjang riset, implementasi, debugging, pengujian, tinjauan, dokumentasi, dan otomasi — sambil menjaga keputusan arsitektur, trade-off, dan kualitas tetap menjadi tanggung jawab pertimbangan teknis manusia.'
                : 'I use AI coding agents throughout research, implementation, debugging, testing, review, documentation, and automation — while keeping architecture decisions, trade-offs, and quality accountable to engineering judgment.'}
            </p>
          </div>

          <ol className="mt-12 grid gap-px border-t border-deep-line bg-deep-line sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <li key={step.step} className="bg-deep p-6">
                <span className="font-mono text-xs text-deep-accent">{step.step}</span>
                <h3 className="mt-3 font-display text-lg">{t(step.title, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-deep-muted">
                  {t(step.description, lang)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {realTestimonials.length ? (
        <Section label={t(ui.headTestimonials, lang)} className="border-t border-line">
          <Container>
            <SectionHeading
              eyebrow={t(ui.eyebrowSocialProof, lang)}
              title={t(ui.headTestimonials, lang)}
            />
            <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-3">
              {realTestimonials.map((x) => (
                <figure key={x.author + x.title.en} className="border-t border-line pt-6">
                  <blockquote className="leading-relaxed text-ink">
                    <p>“{t(x.quote, lang)}”</p>
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block text-sm font-medium">{x.author}</span>
                    <span className="mt-0.5 block text-sm text-ink-subtle">{t(x.title, lang)}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section label={t(ui.eyebrowAbout, lang)} className="border-t border-line">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              eyebrow={t(ui.eyebrowAbout, lang)}
              title={lang === 'id' ? 'Tentang Chandra' : `About ${profile.name.split(' ')[0]}`}
            />
            <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {lang === 'id' ? (
                <>
                  <p>
                    Saya mulai membangun untuk web pada 2014 dengan HTML, CSS, dan JavaScript, lalu
                    beralih ke backend Java, kemudian ke Android native — di situlah mobile berhenti
                    menjadi minat sampingan dan menjadi karier.
                  </p>
                  <p>
                    React Native menyusul, lalu Flutter sejak sekitar 2019. Sejak itu sebagian besar
                    pekerjaan saya hidup di jahitan antara Dart dan platform native: SDK, plugin,
                    platform channel, dan arsitektur yang menyatukan aplikasi ketika ukurannya sudah
                    terlalu besar untuk dipahami satu orang.
                  </p>
                  <p>
                    Kini saya bekerja sebagai Staff Engineer di bidang mobile di Evermos, dan secara
                    independen lewat Solusi Bejo.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I started building for the web in 2014 with HTML, CSS, and JavaScript, moved
                    into Java backend work, then into native Android — which is where mobile stopped
                    being a side interest and became the career.
                  </p>
                  <p>
                    React Native came next, then Flutter from around 2019. Since then most of my
                    work has lived at the seam between Dart and the native platform: SDKs, plugins,
                    platform channels, and the architecture that holds an app together once it is
                    too large for any one person to keep in their head.
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
                  className="link-underline text-base font-medium"
                >
                  {t(ui.ctaFullStory, lang)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section deep label={t(ui.eyebrowContact, lang)}>
        <Container>
          <div className="max-w-narrow">
            <h2 className="text-balance font-display text-display-md">
              {t(ui.headFinalCta, lang)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-deep-muted sm:text-lg">
              {t(ui.leadFinalCta, lang)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="deep">
                <Link
                  href={langPath(lang, '/contact')}
                  className="plausible-event-name=contact_click"
                >
                  {t(ui.ctaDiscussLong, lang)}
                </Link>
              </Button>
              <Button asChild size="lg" variant="deep-outline">
                <a href={profile.mediumUrl} target="_blank" rel="noopener noreferrer">
                  {t(ui.ctaMedium, lang)}
                  <ArrowUpRight className="h-4 w-4" />
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
