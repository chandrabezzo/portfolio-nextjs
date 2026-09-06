import type { Lang } from '@/lib/i18n'

/** Stable across server and client — no locale drift in the static export. */
export function formatDate(iso: string, lang: Lang = 'en'): string {
  const [y, m, d] = iso.split('-')
  return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d))).toLocaleDateString(
    lang === 'id' ? 'id-ID' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' },
  )
}
