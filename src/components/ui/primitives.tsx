import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

export function Container({
  className,
  children,
  narrow,
}: {
  className?: string
  children: ReactNode
  narrow?: boolean
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8',
        narrow ? 'max-w-narrow' : 'max-w-container',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Section({
  as: Tag = 'section',
  className,
  children,
  deep,
  id,
  label,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
  /** Renders the section on the near-black ground used for punctuation. */
  deep?: boolean
  id?: string
  label?: string
}) {
  return (
    <Tag
      id={id}
      aria-label={label}
      className={cn(
        'py-16 sm:py-24',
        deep && 'on-deep bg-deep text-deep-ink',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/** Small monospace label above a heading. Mono is an accent only (brief §13). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('eyebrow', className)}>{children}</p>
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string
  title: string
  lead?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-narrow', className)}>
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-display-md text-balance">{title}</h2>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lead}</p> : null}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-subtle">
      {children}
    </span>
  )
}

export function TagRow({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-3">
          <Tag>{item}</Tag>
          {i < items.length - 1 ? (
            <span aria-hidden className="text-line-strong">
              ·
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-0 border-t border-line', className)} />
}
