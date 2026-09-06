import { CaseStudyView } from '@/views/case-study'
import { getWorkBySlug, getWorkSlugs } from '@/lib/content'
import { pageMetadata } from '@/lib/site'

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getWorkBySlug('id', slug)
  if (!doc) return {}
  return pageMetadata({
    lang: 'id',
    path: `/work/${slug}`,
    title: doc.frontmatter.title,
    description: doc.frontmatter.summary,
    type: 'article',
    publishedTime: doc.frontmatter.publishedAt,
    modifiedTime: doc.frontmatter.updatedAt,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <CaseStudyView lang="id" slug={slug} />
}
