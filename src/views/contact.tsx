import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { Container, Section, PageTitle } from '@/components/ui/primitives'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { t, ui, type L10n, type Lang } from '@/lib/i18n'

/**
 * Static site, so the "form" is a set of pre-addressed mailto links. Each one
 * classifies the enquiry in the subject — no backend, no third-party form
 * service, and no JavaScript required to send it.
 */
const enquiries: { label: L10n; subject: L10n }[] = [
  {
    label: { en: 'Build a mobile application', id: 'Membangun aplikasi mobile' },
    subject: { en: 'Building a mobile application', id: 'Membangun aplikasi mobile' },
  },
  {
    label: {
      en: 'Modernize an existing Flutter application',
      id: 'Memodernisasi aplikasi Flutter yang sudah ada',
    },
    subject: {
      en: 'Modernizing a Flutter application',
      id: 'Modernisasi aplikasi Flutter',
    },
  },
  {
    label: { en: 'Integrate an Android or iOS SDK', id: 'Integrasi SDK Android atau iOS' },
    subject: { en: 'Native SDK integration', id: 'Integrasi SDK native' },
  },
  {
    label: { en: 'Build a plugin or SDK', id: 'Membangun plugin atau SDK' },
    subject: { en: 'Plugin / SDK engineering', id: 'Rekayasa plugin / SDK' },
  },
  {
    label: { en: 'Architecture or technical review', id: 'Tinjauan arsitektur atau teknis' },
    subject: { en: 'Architecture / technical review', id: 'Tinjauan arsitektur / teknis' },
  },
  {
    label: { en: 'Developer tooling', id: 'Developer tooling' },
    subject: { en: 'Developer tooling', id: 'Developer tooling' },
  },
  {
    label: { en: 'Another engineering problem', id: 'Masalah rekayasa lainnya' },
    subject: { en: 'Engineering problem', id: 'Masalah rekayasa' },
  },
]

export function ContactView({ lang }: { lang: Lang }) {
  return (
    <SiteShell lang={lang} path="/contact">
      <Section label={t(ui.eyebrowContact, lang)}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <PageTitle
                eyebrow={t(ui.eyebrowContact, lang)}
                title={
                  lang === 'id'
                    ? 'Ceritakan apa yang sedang Anda bangun.'
                    : 'Tell me what you are building.'
                }
                lead={
                  lang === 'id'
                    ? 'Pesan pertama yang paling berguna menjelaskan masalahnya, batasannya, dan apa yang sudah Anda coba. Kalau saya bukan orang yang tepat, saya akan bilang langsung — dan menunjuk ke tempat yang lebih baik kalau saya tahu.'
                    : 'The most useful first message describes the problem, the constraints, and what you have already tried. If I am not the right person for it, I will tell you that directly — and point you somewhere better where I can.'
                }
              />

              <div className="mt-10 sm:mt-12">
                <p className="eyebrow mb-4">
                  {lang === 'id' ? 'Apa yang Anda butuhkan?' : 'What do you need?'}
                </p>
                <ul className="border-t border-line">
                  {enquiries.map((enquiry) => (
                    <li key={enquiry.subject.en} className="border-b border-line">
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(t(enquiry.subject, lang))}`}
                        className="group flex min-h-[44px] items-center justify-between gap-4 py-4 transition-colors hover:text-accent plausible-event-name=email_click"
                      >
                        <span>{t(enquiry.label, lang)}</span>
                        <span
                          aria-hidden
                          className="font-mono text-sm text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:pt-16">
              <div className="border border-line bg-raised p-6 sm:p-7">
                <p className="eyebrow">{t(ui.eyebrowEmail, lang)}</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline mt-2 block break-all font-display text-lg plausible-event-name=email_click"
                >
                  {profile.email}
                </a>

                <p className="eyebrow mt-8">{t(ui.eyebrowElsewhere, lang)}</p>
                <ul className="mt-2 space-y-1">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap inline-flex py-1.5 text-sm text-ink-muted hover:text-accent"
                      >
                        {link.label} <span className="text-ink-subtle">· {link.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-8">{t(ui.eyebrowBasedIn, lang)}</p>
                <p className="mt-2 text-sm text-ink-muted">{t(profile.location, lang)}</p>
              </div>
            </div>
          </div>

          <JsonLd
            schema={breadcrumbSchema(lang, [
              { name: 'Home', path: '/' },
              { name: t(ui.navContact, lang), path: '/contact' },
            ])}
          />
        </Container>
      </Section>
    </SiteShell>
  )
}
