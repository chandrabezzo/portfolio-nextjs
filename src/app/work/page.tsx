import { getAllWork } from '@/lib/content'
import { projects } from '@/data/projects'
import { Container, Section, SectionHeading, Eyebrow } from '@/components/ui/primitives'
import { CaseStudyPreview, ProjectCard } from '@/components/cards'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Selected Work',
  description:
    'Engineering case studies and shipped mobile products — Flutter, Android, and iOS work described as engineering problems rather than product marketing.',
  path: '/work',
})

export default function WorkPage() {
  const work = getAllWork()
  const shipped = projects.filter((p) => !p.featured)
  const flagship = projects.filter((p) => p.featured)

  return (
    <>
      <Section label="Selected work">
        <Container>
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-5 max-w-narrow font-display text-display-lg text-balance">
            Case studies
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
            Detailed accounts of engineering problems — the situation, the constraints, the
            decisions, and what they cost.
          </p>
          <div className="mt-12">
            {work.map((doc) => (
              <CaseStudyPreview key={doc.slug} doc={doc} />
            ))}
          </div>
        </Container>
      </Section>

      <Section label="Shipped products" className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Shipped products"
            lead="Applications built or led across commerce, healthcare, and consumer products."
          />
          <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {[...flagship, ...shipped].map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ])}
      />
    </>
  )
}
