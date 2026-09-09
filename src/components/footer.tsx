import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { navigation } from '@/data/navigation'
import { Container } from '@/components/ui/primitives'
import { LangSwitch } from '@/components/lang-switch'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

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

        <div className='mt-12 flex flex-col gap-4 border-t border-deep-line pt-6 sm:flex-row sm:items-center sm:justify-between'>
          <p className='font-mono text-xs text-deep-muted'>
            © {new Date().getFullYear()} {profile.name} · {t(profile.location, lang)}
          </p>
          <LangSwitch lang={lang} path={path} />
        </div>
      </Container>
    </footer>
  )
}
