import { openSource, openSourceCategories } from '@/data/open-source'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { OpenSourceCard } from '@/components/cards'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Open Source',
  description:
    'Published Flutter packages, plugins, SDKs, developer tools, and upstream contributions — open source as technical evidence.',
  path: '/open-source',
})

export default function OpenSourcePage() {
  return (
    <Section label="Open source">
      <Container>
        <Eyebrow>Open source</Eyebrow>
        <h1 className="mt-5 max-w-narrow font-display text-display-lg text-balance">
          Open source as technical evidence.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
          Packages I maintain and contributions I have made upstream. Each one exists because a
          real problem needed solving — not to pad a repository list.
        </p>

        {/* Anchor links, not JS filtering: crawlable and works without hydration (brief §43). */}
        <nav aria-label="Categories" className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
          {openSourceCategories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="link-underline text-sm"
            >
              {category}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-16">
          {openSourceCategories.map((category) => {
            const items = openSource.filter((p) => p.category === category)
            if (!items.length) return null
            return (
              <section
                key={category}
                id={category.toLowerCase().replace(/\s+/g, '-')}
                aria-label={category}
                className="scroll-mt-24"
              >
                <h2 className="font-display text-display-sm">{category}</h2>
                <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
                  {items.map((item) => (
                    <OpenSourceCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Open Source', path: '/open-source' },
          ])}
        />
      </Container>
    </Section>
  )
}
