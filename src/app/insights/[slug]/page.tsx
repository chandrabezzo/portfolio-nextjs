import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllInsights, getInsightBySlug } from '@/lib/content'
import { Container, Section, Eyebrow, Divider } from '@/components/ui/primitives'
import { Prose } from '@/components/ui/prose'
import { Button } from '@/components/ui/button'
import { Mdx } from '@/components/mdx'
import { TableOfContents } from '@/components/toc'
import { pageMetadata } from '@/lib/site'
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema'
import { profile } from '@/data/profile'
import { formatDate } from '@/lib/format'

export function generateStaticParams() {
  return getAllInsights().map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getInsightBySlug(slug)
  if (!doc) return {}
  return pageMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.summary,
    path: `/insights/${slug}`,
    type: 'article',
    publishedTime: doc.frontmatter.publishedAt,
    modifiedTime: doc.frontmatter.updatedAt,
  })
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getInsightBySlug(slug)
  if (!doc) notFound()

  const { frontmatter: fm } = doc
  const related = getAllInsights().filter((d) => d.slug !== slug).slice(0, 2)

  return (
    <>
      <Section as="article" label={fm.title} className="pb-0">
        <Container narrow>
          <Link href="/insights" className="link-underline mb-8 inline-flex text-sm">
            <ArrowLeft className="h-4 w-4" />
            All insights
          </Link>

          <Eyebrow>{fm.category}</Eyebrow>
          <h1 className="mt-5 font-display text-display-lg text-balance">{fm.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">{fm.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line py-4 font-mono text-xs text-ink-subtle">
            <span>{profile.name}</span>
            <span aria-hidden>·</span>
            <time dateTime={fm.publishedAt}>{formatDate(fm.publishedAt)}</time>
            {fm.updatedAt ? (
              <>
                <span aria-hidden>·</span>
                <span>Updated {formatDate(fm.updatedAt)}</span>
              </>
            ) : null}
            <span aria-hidden>·</span>
            <span>{doc.readingTime} min read</span>
          </div>

          <div className="mt-12">
            <TableOfContents body={doc.body} />
            <Prose>
              <Mdx source={doc.body} />
            </Prose>
          </div>
        </Container>
      </Section>

      <Section className="pt-16">
        <Container narrow>
          <Divider className="mb-10" />

          <div className="mb-14 border-t border-line pt-6">
            <p className="eyebrow mb-3">Author</p>
            <p className="font-display text-lg">{profile.name}</p>
            <p className="mt-2 max-w-prose leading-relaxed text-ink-muted">{profile.summary}</p>
          </div>

          {related.length ? (
            <div className="mb-14">
              <p className="eyebrow mb-5">Related articles</p>
              <ul className="space-y-4">
                {related.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/insights/${d.slug}`}
                      className="link-underline font-display text-lg"
                    >
                      {d.frontmatter.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="border border-line bg-raised p-8">
            <h2 className="font-display text-xl">Facing a similar engineering problem?</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              I work with teams on exactly this kind of problem.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">Discuss it with me</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <JsonLd
        schema={[
          articleSchema({
            title: fm.title,
            description: fm.summary,
            path: `/insights/${slug}`,
            publishedAt: fm.publishedAt,
            updatedAt: fm.updatedAt,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: fm.title, path: `/insights/${slug}` },
          ]),
        ]}
      />
    </>
  )
}
