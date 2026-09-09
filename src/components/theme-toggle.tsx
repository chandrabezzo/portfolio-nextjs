'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ui, t, type Lang } from '@/lib/i18n'

export const THEME_KEY = 'sb-theme'

/** Apply an explicit preference before paint. Light is the editorial default. */
export const themeInitScript = `
try {
  const dark = localStorage.getItem('${THEME_KEY}') === 'dark';
  document.documentElement.classList.toggle('dark', dark);
} catch (e) {}
`.trim()

export function ThemeToggle({ lang }: { lang: Lang }) {
  const [light, setLight] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLight(!document.documentElement.classList.contains('dark'))
    setReady(true)
  }, [])

  const toggle = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('dark', !next)
    try {
      localStorage.setItem(THEME_KEY, next ? 'light' : 'dark')
    } catch {
      // Private mode or blocked storage: the toggle still works for this page view.
    }
  }

  return (
    <button
      type='button'
      onClick={toggle}
      className='tap flex rounded-md border border-line p-1 text-ink-muted transition-colors hover:bg-raised hover:text-ink'
      aria-label={t(ui.labelToggleTheme, lang)}
      aria-pressed={ready ? light : undefined}
    >
      {/* Both icons render; CSS picks one, so there is no hydration mismatch. */}
      <Sun className='hidden h-[18px] w-[18px] [.dark_&]:block' aria-hidden />
      <Moon className='h-[18px] w-[18px] [.dark_&]:hidden' aria-hidden />
    </button>
  )
}
