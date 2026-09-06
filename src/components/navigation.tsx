'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navigation, primaryCta } from '@/data/navigation'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Route change closes the panel; Escape does too.
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          {/* The person's name leads, not the Solusi Bejo brand (brief §16). */}
          <Link
            href="/"
            className="font-display text-[1.0625rem] font-medium tracking-tight text-ink"
          >
            {profile.name}
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'text-sm transition-colors hover:text-ink',
                      isActive(item.href) ? 'text-ink' : 'text-ink-muted',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild size="sm">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-ground md:hidden">
          <Container>
            <nav aria-label="Main" className="py-6">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className="block py-3 font-display text-xl text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-5 w-full" size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
