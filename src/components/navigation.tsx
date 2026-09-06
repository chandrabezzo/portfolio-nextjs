'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navigation, primaryCta } from '@/data/navigation'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/primitives'
import { ThemeToggle } from '@/components/theme-toggle'
import { LangSwitch } from '@/components/lang-switch'
import { langPath, t, ui, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Navigation({ lang, path }: { lang: Lang; path: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => path === href || path.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href={langPath(lang, '/')}
            className="flex items-center gap-2.5"
            aria-label={profile.name}
          >
            {/* Existing Solusi Bejo mark, kept as-is. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" aria-hidden width={28} height={28} className="h-7 w-7" />
            <span className="font-display text-base font-medium tracking-tight text-ink sm:text-[1.0625rem]">
              {profile.name}
            </span>
          </Link>

          <nav aria-label={t(ui.labelMainNav, lang)} className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {t(item.label, lang)}
                      <ArrowUpRight className="h-3 w-3" aria-hidden />
                    </a>
                  ) : (
                    <Link
                      href={langPath(lang, item.href)}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={cn(
                        'text-sm transition-colors hover:text-ink',
                        isActive(item.href) ? 'text-ink' : 'text-ink-muted',
                      )}
                    >
                      {t(item.label, lang)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LangSwitch lang={lang} path={path} />
            <span aria-hidden className="h-4 w-px bg-line" />
            <ThemeToggle lang={lang} />
            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link href={langPath(lang, primaryCta.href)}>{t(primaryCta.label, lang)}</Link>
            </Button>

            <button
              type="button"
              className="tap -mr-2 flex lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={t(open ? ui.labelCloseMenu : ui.labelOpenMenu, lang)}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-ground lg:hidden">
          <Container>
            <nav aria-label={t(ui.labelMainNav, lang)} className="py-4">
              <ul className="flex flex-col divide-y divide-line">
                {navigation.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-4 font-display text-lg text-ink"
                      >
                        {t(item.label, lang)}
                        <ArrowUpRight className="h-4 w-4 text-ink-subtle" aria-hidden />
                      </a>
                    ) : (
                      <Link
                        href={langPath(lang, item.href)}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className="block py-4 font-display text-lg text-ink"
                      >
                        {t(item.label, lang)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-5 w-full" size="lg">
                <Link href={langPath(lang, primaryCta.href)}>{t(primaryCta.label, lang)}</Link>
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
