import Link from 'next/link'
import { expertise } from '@/data/expertise'
import { problems } from '@/data/problems'
import { Container, Section, SectionHeading, Eyebrow, TagRow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Expertise',
  description:
    'Mobile engineering, Flutter, native Android and iOS integration, SDK and plugin engineering, architecture and modernization, developer tooling, technical consulting, and AI-augmented engineering.',
  path: '/expertise',
})

export default function ExpertisePage() {
  return (
    <>
      <Section label="Expertise">
        <Container>
          <Eyebrow>Expertise</Eyebrow>
          <h1 className="mt-5 max-w-narrow font-display text-display-lg text-balance">
            Where I am useful, and why.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
            Each area below is a kind of problem, not a technology list. The technologies are
            listed because they are the tools the problem happens to require.
          </p>

          <div className="mt-14 border-t border-line">
            {expertise.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="grid gap-4 border-b border-line py-10 lg:grid-cols-[18rem_1fr] lg:gap-12"
              >
                <h2 className="font-display text-xl">{item.title}</h2>
                <div>
                  <p className="max-w-prose text-lg leading-relaxed text-ink">{item.summary}</p>
                  <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">{item.detail}</p>
                  <div className="mt-5">
                    <TagRow items={item.stack} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section label="Engagements" className="border-t border-line">
        <Container>
          <SectionHeading eyebrow="Engagements" title="How this usually starts" />
          <div className="mt-12 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-ground p-7">
                <h3 className="font-display text-lg">{problem.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{problem.description}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-12">
            <Link href="/contact">Discuss a Technical Problem</Link>
          </Button>
        </Container>
      </Section>

      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Expertise', path: '/expertise' },
        ])}
      />
    </>
  )
}
