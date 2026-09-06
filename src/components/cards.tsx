import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { categoryLabel, type OpenSourceProject } from '@/data/open-source'
import type { Doc } from '@/lib/content'
import type { CaseStudyFrontmatter } from '@/schemas/content'
import { TagRow, Tag } from '@/components/ui/primitives'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function CaseStudyPreview({ doc, lang }: { doc: Doc<CaseStudyFrontmatter>; lang: Lang }) {
  const fm = doc.frontmatter
  return (
    <article className="group border-t border-line py-8 sm:py-10">
      <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-6">
        <div>
          <Tag>{fm.company}</Tag>
          <p className="mt-2 font-mono text-xs text-ink-subtle">{fm.timeline}</p>
        </div>
        <div>
          <h3 className="font-display text-display-sm">
            <Link
              href={langPath(lang, `/work/${doc.slug}`)}
              className="transition-colors hover:text-accent"
            >
              {fm.title}
            </Link>
          </h3>
          <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">{fm.summary}</p>
          <div className="mt-5">
            <TagRow items={fm.technologies} />
          </div>
          <p className="mt-5">
            <Link
              href={langPath(lang, `/work/${doc.slug}`)}
              className="link-underline text-sm font-medium"
            >
              {t(ui.ctaReadCase, lang)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export function OpenSourceCard({ item, lang }: { item: OpenSourceProject; lang: Lang }) {
  return (
    <article className="flex flex-col border-t border-line py-7 sm:py-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Tag>{t(categoryLabel[item.category], lang)}</Tag>
        <span aria-hidden className="text-line-strong">
          ·
        </span>
        <span className="font-mono text-xs text-ink-subtle">{item.year}</span>
        {item.contribution ? (
          <span className="border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-subtle">
            {t(ui.labelUpstream, lang)}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 font-display text-xl">{item.title}</h3>
      <p className="mt-2 leading-relaxed text-ink-muted">{t(item.summary, lang)}</p>
      {item.why ? (
        <p className="mt-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-muted">
          {t(item.why, lang)}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
        {item.links.github ? (
          <a
            href={item.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline tap py-1 text-sm"
          >
            {item.contribution ? t(ui.labelViewPr, lang) : 'GitHub'}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
        {item.links.pubDev ? (
          <a
            href={item.links.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline tap py-1 text-sm"
          >
            pub.dev
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const links = [
    { label: t(ui.labelPlayStore, lang), href: project.links?.playStore },
    { label: t(ui.labelAppStore, lang), href: project.links?.appStore },
    { label: t(ui.labelWebsite, lang), href: project.links?.website },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href))

  return (
    <article className="border-t border-line py-7 sm:py-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
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
      {project.role ? (
        <p className="mt-1 text-sm text-ink-subtle">{t(project.role, lang)}</p>
      ) : null}
      <p className="mt-2 max-w-prose leading-relaxed text-ink-muted">{t(project.summary, lang)}</p>
      <div className="mt-4">
        <TagRow items={project.technologies} />
      </div>
      {links.length ? (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline tap py-1 text-sm"
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
