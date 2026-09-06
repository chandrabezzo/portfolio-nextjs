import { getAllWork } from '@/lib/content'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { ArrowUpRight } from 'lucide-react'
import { Container, Section, SectionHeading, PageTitle } from '@/components/ui/primitives'
import { CaseStudyPreview, ProjectCard } from '@/components/cards'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { t, ui, type Lang } from '@/lib/i18n'

export function WorkView({ lang }: { lang: Lang }) {
  const work = getAllWork(lang)
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)]

  return (
    <SiteShell lang={lang} path="/work">
      <Section label={t(ui.headCaseStudies, lang)}>
        <Container>
          <PageTitle
            eyebrow={t(ui.eyebrowSelectedWork, lang)}
            title={t(ui.headCaseStudies, lang)}
            lead={t(ui.leadCaseStudies, lang)}
          />
          <div className="mt-10 sm:mt-12">
            {work.map((doc) => (
              <CaseStudyPreview key={doc.slug} doc={doc} lang={lang} />
            ))}
          </div>
        </Container>
      </Section>

      <Section label={t(ui.headShipped, lang)} className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowProducts, lang)}
            title={t(ui.headShipped, lang)}
            lead={t(ui.leadShipped, lang)}
          />
          <p className="mt-6">
            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium"
            >
              {t(ui.ctaLinkedIn, lang)}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
          <div className="mt-10 grid gap-x-12 sm:mt-12 sm:grid-cols-2">
            {ordered.map((project) => (
              <ProjectCard key={project.slug} project={project} lang={lang} />
            ))}
          </div>
        </Container>
      </Section>

      <JsonLd
        schema={breadcrumbSchema(lang, [
          { name: 'Home', path: '/' },
          { name: t(ui.navWork, lang), path: '/work' },
        ])}
      />
    </SiteShell>
  )
}
