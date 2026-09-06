'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ui, t, type Lang } from '@/lib/i18n'

export const THEME_KEY = 'sb-theme'

/**
 * Inlined in <head> before paint so a stored light preference never flashes
 * dark. Dark is the default, so we only ever add the `light` class.
 */
export const themeInitScript = `
try {
  if (localStorage.getItem('${THEME_KEY}') === 'light') {
    document.documentElement.classList.add('light');
  }
} catch (e) {}
`.trim()

export function ThemeToggle({ lang }: { lang: Lang }) {
  const [light, setLight] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLight(document.documentElement.classList.contains('light'))
    setReady(true)
  }, [])

  const toggle = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    try {
      localStorage.setItem(THEME_KEY, next ? 'light' : 'dark')
    } catch {
      // Private mode or blocked storage: the toggle still works for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="tap -m-1 flex rounded p-1 text-ink-muted transition-colors hover:text-ink"
      aria-label={t(ui.labelToggleTheme, lang)}
      aria-pressed={ready ? light : undefined}
    >
      {/* Both icons render; CSS picks one, so there is no hydration mismatch. */}
      <Sun className="hidden h-[18px] w-[18px] [.light_&]:block" aria-hidden />
      <Moon className="h-[18px] w-[18px] [.light_&]:hidden" aria-hidden />
    </button>
  )
}
