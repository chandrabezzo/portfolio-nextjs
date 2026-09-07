import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllWork, getWorkBySlug } from '@/lib/content'
import { Container, Section, Eyebrow, TagRow, Divider } from '@/components/ui/primitives'
import { Prose } from '@/components/ui/prose'
import { Button } from '@/components/ui/button'
import { Mdx } from '@/components/mdx'
import { TableOfContents } from '@/components/toc'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema'
import { profile } from '@/data/profile'
import { formatDate } from '@/lib/format'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function CaseStudyView({ lang, slug }: { lang: Lang; slug: string }) {
  const doc = getWorkBySlug(lang, slug)
  if (!doc) notFound()

  const fm = doc.frontmatter
  const related = getAllWork(lang)
    .filter((d) => d.slug !== slug)
    .slice(0, 2)

  return (
    <SiteShell lang={lang} path={`/work/${slug}`}>
      <Section as="article" label={fm.title} className="pb-0">
        <Container narrow>
          <Link
            href={langPath(lang, '/work')}
            className="link-underline mb-8 inline-flex text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(ui.ctaAllCases, lang)}
          </Link>

          <Eyebrow>{t(ui.eyebrowCaseStudy, lang)}</Eyebrow>
          <h1 className="mt-4 font-display text-display-lg text-balance sm:mt-5">{fm.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
            {fm.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-5 border-y border-line py-6 sm:grid-cols-4 sm:gap-6">
            <div>
              <dt className="eyebrow">{t(ui.labelRole, lang)}</dt>
              <dd className="mt-2 text-sm">{fm.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">{t(ui.labelCompany, lang)}</dt>
              <dd className="mt-2 text-sm">{fm.company}</dd>
            </div>
            <div>
              <dt className="eyebrow">{t(ui.labelTimeline, lang)}</dt>
              <dd className="mt-2 text-sm">{fm.timeline}</dd>
            </div>
            <div>
              <dt className="eyebrow">{t(ui.labelUpdated, lang)}</dt>
              <dd className="mt-2 text-sm">
                {formatDate(fm.updatedAt ?? fm.publishedAt, lang)}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <TagRow items={fm.technologies} />
          </div>

          <div className="mt-12 sm:mt-14">
            <TableOfContents body={doc.body} lang={lang} />
            <Prose>
              <Mdx source={doc.body} />
            </Prose>
          </div>
        </Container>
      </Section>

      <Section className="pt-14">
        <Container narrow>
          <Divider className="mb-10" />

          {related.length ? (
            <div className="mb-12">
              <p className="eyebrow mb-4">{t(ui.eyebrowRelatedWork, lang)}</p>
              <ul className="space-y-3">
                {related.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={langPath(lang, `/work/${d.slug}`)}
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

          <div className="border border-line bg-raised p-6 sm:p-8">
            <h2 className="font-display text-xl">{t(ui.headSimilarProblem, lang)}</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {lang === 'id'
                ? `Ceritakan apa yang sedang Anda bangun atau apa yang rusak. — ${profile.name}`
                : `Tell me what you are building or what is breaking. — ${profile.name}`}
            </p>
            <Button asChild className="mt-6">
              <Link href={langPath(lang, '/contact')} className="plausible-event-name=contact_click">
                {t(ui.ctaDiscussWithMe, lang)}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <JsonLd
        schema={[
          articleSchema({
            lang,
            title: fm.title,
            description: fm.summary,
            path: `/work/${slug}`,
            publishedAt: fm.publishedAt,
            updatedAt: fm.updatedAt,
          }),
          breadcrumbSchema(lang, [
            { name: 'Home', path: '/' },
            { name: t(ui.navWork, lang), path: '/work' },
            { name: fm.title, path: `/work/${slug}` },
          ]),
        ]}
      />
    </SiteShell>
  )
}
