import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllInsights, getAllWork } from '@/lib/content'
import { featuredOpenSource } from '@/data/open-source'
import { Container, Section, SectionHeading } from '@/components/ui/primitives'
import { CaseStudyPreview, ArticleCard, OpenSourceCard } from '@/components/cards'
import { JsonLd, profilePageSchema } from '@/lib/schema'
import {
  Hero,
  ProblemsSection,
  ExpertiseSection,
  ApproachSection,
  TestimonialsSection,
  AboutSummarySection,
  CtaSection,
} from '@/components/home-sections'

export default function HomePage() {
  const work = getAllWork().slice(0, 3)
  const insights = getAllInsights().slice(0, 3)
  const oss = featuredOpenSource.slice(0, 4)

  return (
    <>
      <Hero />
      <ProblemsSection />

      <Section label="Selected work" className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Engineering case studies"
            lead="A small number of engagements, described as engineering problems rather than product marketing."
          />
          <div className="mt-12">
            {work.map((doc) => (
              <CaseStudyPreview key={doc.slug} doc={doc} />
            ))}
          </div>
          <p className="mt-10 border-t border-line pt-8">
            <Link href="/work" className="link-underline text-sm font-medium">
              All case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </Container>
      </Section>

      <ExpertiseSection />

      <Section label="Open source" className="border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Open source"
            title="Technical evidence"
            lead="Packages, plugins, and upstream contributions — published, versioned, and used by other engineers."
          />
          <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {oss.map((item) => (
              <OpenSourceCard key={item.slug} item={item} />
            ))}
          </div>
          <p className="mt-10 border-t border-line pt-8">
            <Link href="/open-source" className="link-underline text-sm font-medium">
              All open-source work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </Container>
      </Section>

      <ApproachSection />
      <TestimonialsSection />

      {insights.length ? (
        <Section label="Latest insights" className="border-t border-line">
          <Container>
            <SectionHeading eyebrow="Insights" title="Latest writing" />
            <div className="mt-12">
              {insights.map((doc) => (
                <ArticleCard key={doc.slug} doc={doc} />
              ))}
            </div>
            <p className="mt-10 border-t border-line pt-8">
              <Link href="/insights" className="link-underline text-sm font-medium">
                All insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </Container>
        </Section>
      ) : null}

      <AboutSummarySection />
      <CtaSection />
      <JsonLd schema={profilePageSchema} />
    </>
  )
}
