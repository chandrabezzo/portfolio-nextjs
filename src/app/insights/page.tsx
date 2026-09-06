import { getAllInsights } from '@/lib/content'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { ArticleCard } from '@/components/cards'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Insights',
  description:
    'Long-form technical writing on Flutter, native Android and iOS integration, mobile architecture, developer tooling, and AI-augmented engineering.',
  path: '/insights',
})

export default function InsightsPage() {
  const insights = getAllInsights()

  return (
    <Section label="Insights">
      <Container>
        <Eyebrow>Insights</Eyebrow>
        <h1 className="mt-5 max-w-narrow font-display text-display-lg text-balance">
          Engineering writing
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
          First-hand notes from building mobile systems where Flutter meets the native platform.
        </p>
        {insights.length ? (
          <div className="mt-12">
            {insights.map((doc) => (
              <ArticleCard key={doc.slug} doc={doc} />
            ))}
          </div>
        ) : (
          <p className="mt-12 border-t border-line pt-8 text-ink-muted">
            No articles published yet.
          </p>
        )}
        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
          ])}
        />
      </Container>
    </Section>
  )
}
