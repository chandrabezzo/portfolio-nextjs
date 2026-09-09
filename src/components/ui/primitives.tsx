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
        className
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
  deep?: boolean
  id?: string
  label?: string
}) {
  return (
    <Tag
      id={id}
      aria-label={label}
      className={cn('py-14 sm:py-20 lg:py-24', deep && 'on-deep bg-deep text-deep-ink', className)}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('eyebrow', className)}>{children}</p>
}

export function PageTitle({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: string
}) {
  return (
    <div className='page-title'>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className='mt-4 max-w-narrow font-display text-display-lg text-balance sm:mt-5'>
        {title}
      </h1>
      {lead ? (
        <p className='mt-5 max-w-prose text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg'>
          {lead}
        </p>
      ) : null}
    </div>
  )
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
      {eyebrow ? <Eyebrow className='mb-3 sm:mb-4'>{eyebrow}</Eyebrow> : null}
      <h2 className='font-display text-display-md text-balance'>{title}</h2>
      {lead ? (
        <p className='mt-4 text-base leading-relaxed text-ink-muted sm:mt-5 sm:text-lg'>{lead}</p>
      ) : null}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className='font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-subtle'>
      {children}
    </span>
  )
}

export function TagRow({ items }: { items: readonly string[] }) {
  return (
    <ul className='flex flex-wrap items-center gap-2'>
      {items.map(item => (
        <li key={item} className='rounded border border-line bg-ground px-2 py-1'>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}

export function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-0 border-t border-line', className)} />
}

/** Editorial portrait: cropped to the chest, anchored top. */
export function Portrait({ alt, className }: { alt: string; className?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-[9/10] w-full overflow-hidden rounded-md bg-raised',
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/profile/me.jpg'
        alt={alt}
        loading='eager'
        width={600}
        height={667}
        className='h-full w-full object-cover object-top'
      />
    </div>
  )
}
