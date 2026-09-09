import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { Container, Section, PageTitle } from '@/components/ui/primitives'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { t, ui, type L10n, type Lang } from '@/lib/i18n'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

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
    <SiteShell lang={lang} path='/contact'>
      <Section label={t(ui.eyebrowContact, lang)}>
        <Container>
          <div className='grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20'>
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

              <div className='mt-10 sm:mt-12'>
                <p className='eyebrow mb-4'>
                  {lang === 'id' ? 'Apa yang Anda butuhkan?' : 'What do you need?'}
                </p>
                <ul className='overflow-hidden rounded-lg border border-line bg-surface'>
                  {enquiries.map(enquiry => (
                    <li key={enquiry.subject.en} className='border-b border-line last:border-0'>
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(t(enquiry.subject, lang))}`}
                        className='group flex min-h-16 items-center justify-between gap-4 px-5 py-4 text-sm transition-colors hover:bg-accent-wash hover:text-accent focus-visible:-outline-offset-4 plausible-event-name=email_click'
                      >
                        <span>{t(enquiry.label, lang)}</span>
                        <span
                          aria-hidden
                          className='font-mono text-sm text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent'
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='min-w-0 lg:sticky lg:top-24 lg:self-start'>
              <div className='on-deep rounded-xl border border-deep-line bg-deep p-6 text-deep-ink sm:p-8'>
                <Mail className='mb-8 h-7 w-7 text-deep-accent' strokeWidth={1.5} aria-hidden />
                <p className='eyebrow'>{t(ui.eyebrowEmail, lang)}</p>
                <a
                  href={`mailto:${profile.email}`}
                  className='mt-3 flex min-h-11 items-center justify-between gap-3 break-all font-sans text-lg font-medium underline decoration-deep-line underline-offset-8 transition-colors hover:text-deep-accent plausible-event-name=email_click'
                >
                  {profile.email}
                  <ArrowUpRight className='h-5 w-5 shrink-0 text-deep-accent' aria-hidden />
                </a>
                <div className='mt-8 flex items-start gap-3 border-t border-deep-line pt-6'>
                  <MapPin className='mt-1 h-4 w-4 shrink-0 text-deep-muted' aria-hidden />
                  <div>
                    <p className='eyebrow'>{t(ui.eyebrowBasedIn, lang)}</p>
                    <p className='mt-2 text-sm text-deep-muted'>{t(profile.location, lang)}</p>
                  </div>
                </div>
              </div>
              <div className='surface-card mt-5 p-6 sm:p-8'>
                <p className='eyebrow'>{t(ui.eyebrowElsewhere, lang)}</p>
                <ul className='mt-4 divide-y divide-line'>
                  {socialLinks.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex min-h-14 items-center justify-between gap-3 py-3 text-sm text-ink-muted transition-colors hover:text-accent'
                      >
                        <span className='min-w-0'>
                          <span className='block font-medium text-ink'>{link.label}</span>
                          <span className='mt-1 block break-words text-xs text-ink-subtle'>
                            {link.handle}
                          </span>
                        </span>
                        <ArrowUpRight className='h-4 w-4 shrink-0' aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
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
