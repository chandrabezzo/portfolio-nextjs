import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import type { OpenSourceProject } from '@/data/open-source'
import type { Doc } from '@/lib/content'
import type { CaseStudyFrontmatter, InsightFrontmatter } from '@/schemas/content'
import { TagRow, Tag } from '@/components/ui/primitives'
import { formatDate } from '@/lib/format'

export function CaseStudyPreview({ doc }: { doc: Doc<CaseStudyFrontmatter> }) {
  const { frontmatter: fm } = doc
  return (
    <article className="group border-t border-line py-10">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div>
          <Tag>{fm.company}</Tag>
          <p className="mt-2 font-mono text-xs text-ink-subtle">{fm.timeline}</p>
        </div>
        <div>
          <h3 className="font-display text-display-sm">
            <Link href={`/work/${doc.slug}`} className="transition-colors hover:text-accent">
              <span className="absolute inset-0 sm:hidden" aria-hidden />
              {fm.title}
            </Link>
          </h3>
          <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">{fm.summary}</p>
          <div className="mt-5">
            <TagRow items={fm.technologies} />
          </div>
          <p className="mt-6">
            <Link href={`/work/${doc.slug}`} className="link-underline text-sm font-medium">
              Read the case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export function ArticleCard({ doc }: { doc: Doc<InsightFrontmatter> }) {
  const { frontmatter: fm } = doc
  return (
    <article className="group border-t border-line py-8">
      <div className="flex flex-wrap items-center gap-3">
        <Tag>{fm.category}</Tag>
        <span aria-hidden className="text-line-strong">
          ·
        </span>
        <span className="font-mono text-xs text-ink-subtle">
          {formatDate(fm.publishedAt)} · {doc.readingTime} min read
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl leading-snug">
        <Link href={`/insights/${doc.slug}`} className="transition-colors hover:text-accent">
          {fm.title}
        </Link>
      </h3>
      <p className="mt-2 max-w-prose leading-relaxed text-ink-muted">{fm.summary}</p>
    </article>
  )
}

export function OpenSourceCard({ item }: { item: OpenSourceProject }) {
  return (
    <article className="flex flex-col border-t border-line py-8">
      <div className="flex flex-wrap items-center gap-3">
        <Tag>{item.category}</Tag>
        <span aria-hidden className="text-line-strong">
          ·
        </span>
        <span className="font-mono text-xs text-ink-subtle">{item.year}</span>
        {item.contribution ? (
          <span className="border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-subtle">
            Upstream
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 font-display text-xl">{item.title}</h3>
      <p className="mt-2 leading-relaxed text-ink-muted">{item.summary}</p>
      {item.why ? (
        <p className="mt-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-muted">
          {item.why}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {item.links.github ? (
          <a
            href={item.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
          >
            {item.contribution ? 'View pull request' : 'GitHub'}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
        {item.links.pubDev ? (
          <a
            href={item.links.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
          >
            pub.dev
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const links = [
    { label: 'Play Store', href: project.links?.playStore },
    { label: 'App Store', href: project.links?.appStore },
    { label: 'Website', href: project.links?.website },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href))

  return (
    <article className="border-t border-line py-8">
      <div className="flex flex-wrap items-center gap-3">
        {project.company ? <Tag>{project.company}</Tag> : null}
        {project.year ? (
          <>
            <span aria-hidden className="text-line-strong">
              ·
            </span>
            <span className="font-mono text-xs text-ink-subtle">{project.year}</span>
          </>
        ) : null}
      </div>
      <h3 className="mt-3 font-display text-xl">{project.title}</h3>
      {project.role ? <p className="mt-1 text-sm text-ink-subtle">{project.role}</p> : null}
      <p className="mt-2 max-w-prose leading-relaxed text-ink-muted">{project.summary}</p>
      <div className="mt-4">
        <TagRow items={project.technologies} />
      </div>
      {links.length ? (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}
