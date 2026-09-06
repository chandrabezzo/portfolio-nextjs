import Link from 'next/link'
import { LANGS, LANG_LABEL, LANG_SHORT, LANG_TAG, langPath, ui, t, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * Real anchors, not a client-side toggle: each language is a distinct URL that
 * search engines and AI crawlers can index independently.
 */
export function LangSwitch({ lang, path }: { lang: Lang; path: string }) {
  return (
    <div className="flex items-center gap-1" role="group" aria-label={t(ui.labelLanguage, lang)}>
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 ? (
            <span aria-hidden className="px-1 text-line-strong">
              /
            </span>
          ) : null}
          <Link
            href={langPath(code, path)}
            hrefLang={LANG_TAG[code]}
            aria-label={LANG_LABEL[code]}
            aria-current={code === lang ? 'true' : undefined}
            className={cn(
              'tap flex rounded px-1 font-mono text-xs transition-colors',
              code === lang ? 'text-ink' : 'text-ink-subtle hover:text-ink',
            )}
          >
            {LANG_SHORT[code]}
          </Link>
        </span>
      ))}
    </div>
  )
}
