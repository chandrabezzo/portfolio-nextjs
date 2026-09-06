import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllWork, getWorkBySlug } from '@/lib/content'
import { Container, Section, Eyebrow, TagRow, Divider } from '@/components/ui/primitives'
import { Prose } from '@/components/ui/prose'
import { Button } from '@/components/ui/button'
import { Mdx } from '@/components/mdx'
import { TableOfContents } from '@/components/toc'
import { pageMetadata } from '@/lib/site'
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema'
import { profile } from '@/data/profile'
import { formatDate } from '@/lib/format'

export function generateStaticParams() {
  return getAllWork().map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getWorkBySlug(slug)
  if (!doc) return {}
  return pageMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.summary,
    path: `/work/${slug}`,
    type: 'article',
    publishedTime: doc.frontmatter.publishedAt,
    modifiedTime: doc.frontmatter.updatedAt,
  })
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getWorkBySlug(slug)
  if (!doc) notFound()

  const { frontmatter: fm } = doc
  const related = getAllWork().filter((d) => d.slug !== slug).slice(0, 2)

  return (
    <>
      <Section as="article" label={fm.title} className="pb-0">
        <Container narrow>
          <Link href="/work" className="link-underline mb-8 inline-flex text-sm">
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>

          <Eyebrow>Engineering case study</Eyebrow>
          <h1 className="mt-5 font-display text-display-lg text-balance">{fm.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">{fm.summary}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-2 text-sm">{fm.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">Company</dt>
              <dd className="mt-2 text-sm">{fm.company}</dd>
            </div>
            <div>
              <dt className="eyebrow">Timeline</dt>
              <dd className="mt-2 text-sm">{fm.timeline}</dd>
            </div>
            <div>
              <dt className="eyebrow">Updated</dt>
              <dd className="mt-2 text-sm">{formatDate(fm.updatedAt ?? fm.publishedAt)}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <TagRow items={fm.technologies} />
          </div>

          <div className="mt-14">
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
          {related.length ? (
            <div className="mb-14">
              <p className="eyebrow mb-5">Related work</p>
              <ul className="space-y-4">
                {related.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/work/${d.slug}`} className="link-underline font-display text-lg">
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
              Tell me what you are building or what is breaking. — {profile.name}
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
            path: `/work/${slug}`,
            publishedAt: fm.publishedAt,
            updatedAt: fm.updatedAt,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: fm.title, path: `/work/${slug}` },
          ]),
        ]}
      />
    </>
  )
}
