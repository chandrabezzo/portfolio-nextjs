import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { experience } from '@/data/experience'
import { education, certifications } from '@/data/education'
import {
  Container,
  Section,
  SectionHeading,
  PageTitle,
  Portrait,
} from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { langPath, t, ui, type Lang, type L10n } from '@/lib/i18n'

/** Dates match the experience and education data. No rounded-up claims. */
const journey: { year: string; title: L10n; body: L10n }[] = [
  {
    year: '2014',
    title: { en: 'The web', id: 'Web' },
    body: {
      en: 'Started building with HTML, CSS, and JavaScript while entering Politeknik Negeri Bandung.',
      id: 'Mulai membangun dengan HTML, CSS, dan JavaScript sambil masuk Politeknik Negeri Bandung.',
    },
  },
  {
    year: '2015',
    title: { en: 'Solusi Bejo', id: 'Solusi Bejo' },
    body: {
      en: 'Began taking on independent client work as Solusi Bejo.',
      id: 'Mulai menerima pekerjaan klien secara independen dengan nama Solusi Bejo.',
    },
  },
  {
    year: '2016',
    title: { en: 'Java backend', id: 'Backend Java' },
    body: {
      en: 'First professional role — building the API behind an Android consignment app.',
      id: 'Peran profesional pertama — membangun API di balik aplikasi konsinyasi Android.',
    },
  },
  {
    year: '2017',
    title: { en: 'Native Android', id: 'Android Native' },
    body: {
      en: 'Moved into mobile properly: native Android for healthcare and enterprise clients.',
      id: 'Masuk sepenuhnya ke mobile: Android native untuk klien kesehatan dan enterprise.',
    },
  },
  {
    year: '2018',
    title: { en: 'React Native', id: 'React Native' },
    body: {
      en: 'First cross-platform work, and the first real look at what cross-platform costs.',
      id: 'Pekerjaan lintas platform pertama, sekaligus melihat langsung apa harga dari cross-platform.',
    },
  },
  {
    year: '2019',
    title: { en: 'Flutter', id: 'Flutter' },
    body: {
      en: 'Adopted Flutter, which has been the primary platform since.',
      id: 'Mulai memakai Flutter, yang sejak itu menjadi platform utama.',
    },
  },
  {
    year: '2021',
    title: { en: 'Native integration', id: 'Integrasi native' },
    body: {
      en: 'Deep work at the Dart/platform boundary — platform channels, native SDKs, Kotlin and Swift.',
      id: 'Pekerjaan mendalam di batas Dart/platform — platform channel, SDK native, Kotlin dan Swift.',
    },
  },
  {
    year: '2023',
    title: { en: 'Staff engineering', id: 'Staff engineering' },
    body: {
      en: 'Technical direction, engineering effectiveness, and mentorship at Evermos.',
      id: 'Arah teknis, efektivitas engineering, dan mentoring di Evermos.',
    },
  },
  {
    year: '2025',
    title: { en: 'SDKs, plugins, tooling', id: 'SDK, plugin, tooling' },
    body: {
      en: 'Publishing packages other engineers depend on, including the Screen Time plugin.',
      id: 'Memublikasikan paket yang diandalkan engineer lain, termasuk plugin Screen Time.',
    },
  },
]

export function AboutView({ lang }: { lang: Lang }) {
  return (
    <SiteShell lang={lang} path="/about">
      <Section label={t(ui.eyebrowAbout, lang)}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <PageTitle
                eyebrow={t(ui.eyebrowAbout, lang)}
                title={
                  lang === 'id'
                    ? 'Satu dekade membangun untuk mobile.'
                    : 'A decade of building for mobile.'
                }
              />
              <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                <p>
                  {lang === 'id'
                    ? `Saya ${profile.name}, konsultan rekayasa perangkat lunak yang berbasis di ${t(profile.location, lang)}. Saya bekerja sebagai Staff Engineer di bidang mobile di Evermos, dan secara independen lewat Solusi Bejo.`
                    : `I am ${profile.name}, a software engineering consultant based in ${t(profile.location, lang)}. I work as a Staff Engineer on mobile at Evermos, and independently through Solusi Bejo.`}
                </p>
                <p>{t(profile.summary, lang)}</p>
              </div>
            </div>
            <div>
              <Portrait
                alt={`${profile.name}, ${t(profile.role, lang)}`}
                className="max-w-[16rem] sm:max-w-[19rem] lg:ml-auto"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section label={t(ui.headJourney, lang)} className="border-t border-line">
        <Container>
          <SectionHeading eyebrow={t(ui.eyebrowJourney, lang)} title={t(ui.headJourney, lang)} />
          <ol className="mt-10 border-t border-line sm:mt-12">
            {journey.map((item) => (
              <li
                key={item.year}
                className="grid gap-1 border-b border-line py-5 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:py-6"
              >
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <div>
                  <h3 className="font-display text-lg">{t(item.title, lang)}</h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">{t(item.body, lang)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section label={t(ui.headExperience, lang)} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowExperience, lang)}
            title={t(ui.headExperience, lang)}
          />
          <p className="mt-5">
            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium"
            >
              {t(ui.ctaLinkedIn, lang)}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>

          <div className="mt-10 space-y-12 sm:mt-12">
            {experience.map((job) => (
              <div key={job.company} className="border-t border-line pt-7">
                <div className="grid gap-5 lg:grid-cols-[16rem_1fr] lg:gap-12">
                  <div>
                    <h3 className="font-display text-xl">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                      {t(job.context, lang)}
                    </p>
                  </div>
                  <div className="space-y-7">
                    {job.positions.map((position) => (
                      <div key={position.title.en + position.period}>
                        <h4 className="font-medium">{t(position.title, lang)}</h4>
                        <p className="mt-0.5 font-mono text-xs text-ink-subtle">
                          {position.period}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {position.highlights.map((highlight) => (
                            <li
                              key={highlight.en}
                              className="border-l border-line pl-4 leading-relaxed text-ink-muted"
                            >
                              {t(highlight, lang)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section label={lang === 'id' ? 'Pendidikan' : 'Education'} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={lang === 'id' ? 'Pendidikan' : 'Education'}
            title={lang === 'id' ? 'Pendidikan & sertifikasi' : 'Education & certifications'}
          />

          <div className="mt-10 grid gap-12 sm:mt-12 lg:grid-cols-2 lg:gap-16">
            <ol className="border-t border-line">
              {education.map((item) => (
                <li key={item.institution} className="border-b border-line py-5 sm:py-6">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h3 className="mt-2 font-display text-lg">{item.institution}</h3>
                  <p className="mt-1 text-ink-muted">
                    {t(item.degree, lang)} · {t(item.field, lang)}
                  </p>
                  {item.note ? (
                    <p className="mt-1 text-sm text-ink-subtle">{t(item.note, lang)}</p>
                  ) : null}
                </li>
              ))}
            </ol>

            <div>
              <p className="eyebrow mb-4">
                {lang === 'id' ? 'Sertifikasi' : 'Certifications'}
              </p>
              <ul className="border-t border-line">
                {certifications.map((cert) => (
                  <li key={cert.name} className="border-b border-line py-4">
                    <p className="font-medium">{cert.name}</p>
                    <p className="mt-0.5 text-sm text-ink-subtle">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={langPath(lang, '/contact')}>{t(ui.ctaDiscussLong, lang)}</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                {t(ui.ctaCv, lang)}
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      <JsonLd
        schema={breadcrumbSchema(lang, [
          { name: 'Home', path: '/' },
          { name: t(ui.navAbout, lang), path: '/about' },
        ])}
      />
    </SiteShell>
  )
}
