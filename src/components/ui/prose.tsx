import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/** Long-form MDX body styling. Tuned for reading, not for density. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'prose prose-neutral max-w-prose',
        'prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink',
        'prose-h2:mt-14 prose-h2:text-[1.75rem] prose-h3:mt-10 prose-h3:text-xl',
        'prose-p:text-ink-muted prose-p:leading-[1.75]',
        'prose-li:text-ink-muted prose-li:leading-[1.75]',
        'prose-strong:text-ink prose-strong:font-semibold',
        'prose-a:text-accent prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-accent-hover',
        'prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:pl-5 prose-blockquote:not-italic prose-blockquote:text-ink',
        'prose-code:font-mono prose-code:text-[0.875em] prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:border prose-pre:border-line prose-pre:bg-raised prose-pre:text-[0.85rem]',
        'prose-img:rounded prose-hr:border-line',
        className,
      )}
    >
      {children}
    </div>
  )
}
