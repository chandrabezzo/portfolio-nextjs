import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { navigation } from '@/data/navigation'
import { Container } from '@/components/ui/primitives'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

const footerLanguages = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Indonesia' },
  { code: 'ms', label: 'Melayu' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
] as const

export function Footer({ lang, path }: { lang: Lang; path: string }) {
  return (
    <footer className='on-deep mt-auto border-t border-deep-line bg-deep py-12 text-deep-ink sm:py-16'>
      <Container>
        <div className='grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]'>
          <div>
            <span className='brand-mark mb-4 text-deep-accent' aria-hidden />
            <p className='font-display text-xl'>{profile.name}</p>
            <p className='mt-1 text-sm text-deep-muted'>{t(profile.role, lang)}</p>
            <p className='mt-5 max-w-xs text-sm leading-relaxed text-deep-muted'>
              {profile.brand} — {t(profile.brandLine, lang)}
            </p>
          </div>

          <nav aria-label={t(ui.labelFooterNav, lang)}>
            <p className='eyebrow mb-4'>{t(ui.eyebrowSite, lang)}</p>
            <ul className='space-y-1'>
              {navigation.map(item => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='tap inline-flex items-center gap-1 py-1.5 text-sm text-deep-muted hover:text-deep-ink'
                    >
                      {t(item.label, lang)}
                      <ArrowUpRight className='h-3 w-3' aria-hidden />
                    </a>
                  ) : (
                    <Link
                      href={langPath(lang, item.href)}
                      className='tap inline-flex py-1.5 text-sm text-deep-muted hover:text-deep-ink'
                    >
                      {t(item.label, lang)}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href={langPath(lang, '/contact')}
                  className='tap inline-flex py-1.5 text-sm text-deep-muted hover:text-deep-ink'
                >
                  {t(ui.navContact, lang)}
                </Link>
              </li>
              <li>
                <Link
                  href={langPath(lang, '/archive')}
                  className='tap inline-flex py-1.5 text-sm text-deep-muted hover:text-deep-ink'
                >
                  {t(ui.navArchive, lang)}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className='eyebrow mb-4'>{t(ui.eyebrowElsewhere, lang)}</p>
            <ul className='space-y-1'>
              {socialLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='tap inline-flex py-1.5 text-sm text-deep-muted hover:text-deep-ink'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className='tap inline-flex py-1.5 text-sm text-deep-muted hover:text-deep-ink plausible-event-name=email_click'
                >
                  {t(ui.eyebrowEmail, lang)}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-deep-line pt-6'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <p className='eyebrow pt-1'>{t(ui.labelLanguages, lang)}</p>
            <ul
              className='flex max-w-2xl flex-wrap gap-x-5 gap-y-2'
              aria-label={t(ui.labelLanguages, lang)}
            >
              {footerLanguages.map(language => {
                const supported = language.code === 'en' || language.code === 'id'
                const active = language.code === lang

                return (
                  <li key={language.code} className='flex items-center gap-1.5'>
                    {supported ? (
                      <Link
                        href={langPath(language.code === 'en' ? 'en' : 'id', path)}
                        hrefLang={language.code === 'id' ? 'id-ID' : 'en'}
                        aria-current={active ? 'page' : undefined}
                        className={
                          active
                            ? 'text-sm font-medium text-deep-ink underline decoration-deep-accent underline-offset-4'
                            : 'text-sm text-deep-muted transition-colors hover:text-deep-ink'
                        }
                      >
                        {language.label}
                      </Link>
                    ) : (
                      <span className='text-sm text-deep-muted/75'>{language.label}</span>
                    )}
                    {!supported ? (
                      <span className='font-mono text-[0.625rem] uppercase tracking-wider text-deep-muted/60'>
                        {t(ui.labelComingSoon, lang)}
                      </span>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className='mt-6 border-t border-deep-line pt-6'>
            <p className='font-mono text-xs text-deep-muted'>
              © {new Date().getFullYear()} {profile.name} · {t(profile.location, lang)}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
