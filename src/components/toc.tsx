import { slug as githubSlug } from 'github-slugger'
import { t, ui, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/** Derived from the raw MDX so it always matches rehype-slug's ids. */
export function TableOfContents({
  body,
  lang,
  className,
}: {
  body: string
  lang: Lang
  className?: string
}) {
  const headings = body
    .split('\n')
    .filter(line => /^##\s+/.test(line))
    .map(line => line.replace(/^##\s+/, '').trim())

  if (headings.length < 3) return null

  return (
    <nav
      aria-label={t(ui.eyebrowContents, lang)}
      className={cn('not-prose rounded-lg border border-line bg-surface p-5', className)}
    >
      <p className='eyebrow mb-4'>{t(ui.eyebrowContents, lang)}</p>
      <ol className='space-y-1'>
        {headings.map(heading => (
          <li key={heading}>
            <a
              href={`#${githubSlug(heading)}`}
              className='block rounded py-2 text-sm leading-relaxed text-ink-muted hover:text-accent'
            >
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
