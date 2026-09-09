import Link from 'next/link'
import { LANGS, LANG_LABEL, LANG_SHORT, LANG_TAG, langPath, ui, t, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * Real anchors, not a client-side toggle: each language is a distinct URL that
 * search engines and AI crawlers can index independently.
 */
export function LangSwitch({ lang, path }: { lang: Lang; path: string }) {
  return (
    <div
      className='flex items-center rounded-md border border-line p-0.5 [.on-deep_&]:border-deep-line'
      role='group'
      aria-label={t(ui.labelLanguage, lang)}
    >
      {LANGS.map(code => (
        <span key={code} className='flex items-center'>
          <Link
            href={langPath(code, path)}
            hrefLang={LANG_TAG[code]}
            aria-label={LANG_LABEL[code]}
            aria-current={code === lang ? 'true' : undefined}
            className={cn(
              'tap flex rounded px-1 font-mono text-xs transition-colors',
              code === lang
                ? 'bg-accent-wash text-accent [.on-deep_&]:bg-deep-line [.on-deep_&]:text-deep-ink'
                : 'text-ink-subtle hover:text-ink [.on-deep_&]:text-deep-muted [.on-deep_&]:hover:text-deep-ink'
            )}
          >
            {LANG_SHORT[code]}
          </Link>
        </span>
      ))}
    </div>
  )
}
