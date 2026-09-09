import { getAllWork } from '@/lib/content'
import { projects } from '@/data/projects'
import { experience } from '@/data/experience'
import Link from 'next/link'
import { profile } from '@/data/profile'
import { ArrowUpRight } from 'lucide-react'
import { Container, Section, SectionHeading, PageTitle } from '@/components/ui/primitives'
import { CaseStudyPreview, ProjectCard } from '@/components/cards'
import { SiteShell } from '@/components/site-shell'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function WorkView({ lang }: { lang: Lang }) {
  const work = getAllWork(lang)
  const ordered = projects.filter(p => p.featured)
  const engagements = experience.filter(job =>
    ['Evermos', 'TechLab Security Sdn Bhd', 'Cloud Creatures', 'PT. Lentera Duta Persada'].includes(
      job.company
    )
  )

  return (
    <SiteShell lang={lang} path='/work'>
      <Section label={t(ui.headCaseStudies, lang)}>
        <Container>
          <PageTitle
            eyebrow={t(ui.eyebrowSelectedWork, lang)}
            title={t(ui.headCaseStudies, lang)}
            lead={t(ui.leadCaseStudies, lang)}
          />
          <nav
            aria-label={lang === 'id' ? 'Jelajahi portofolio' : 'Explore work'}
            className='mt-8 flex flex-wrap gap-2'
          >
            <a href='#case-studies' className='category-link'>
              {lang === 'id' ? 'Studi kasus' : 'Case studies'}
            </a>
            <a href='#engagements' className='category-link'>
              {lang === 'id' ? 'Pengalaman kerja' : 'Experience'}
            </a>
            <a href='#products' className='category-link'>
              {lang === 'id' ? 'Produk pilihan' : 'Selected products'}
            </a>
          </nav>
          <div id='case-studies' className='mt-10 scroll-mt-24 space-y-6 sm:mt-12'>
            <h2 className='sr-only'>
              {lang === 'id' ? 'Studi kasus pilihan' : 'Selected case studies'}
            </h2>
            {work.map(doc => (
              <CaseStudyPreview key={doc.slug} doc={doc} lang={lang} />
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id='engagements'
        label={lang === 'id' ? 'Pengalaman kerja' : 'Experience'}
        className='scroll-mt-20 border-t border-line bg-surface'
      >
        <Container>
          <SectionHeading
            eyebrow={lang === 'id' ? 'Di balik pekerjaan' : 'Behind the work'}
            title={
              lang === 'id'
                ? 'Pengalaman lintas tim dan industri.'
                : 'Engineering across teams and industries.'
            }
            lead={
              lang === 'id'
                ? 'Pengalaman sebagai Staff Engineer, lead mobile, engineer freelance, dan co-founder.'
                : 'Experience as a Staff Engineer, mobile lead, freelance engineer, and co-founder.'
            }
          />
          <div className='mt-10 grid gap-6 md:grid-cols-2'>
            {engagements.map(job => {
              const position = job.positions[0]
              if (!position) return null
              return (
                <article
                  id={job.product ? 'geoxspot' : undefined}
                  key={job.company}
                  className='scroll-mt-24 rounded-lg border border-line bg-ground p-6 sm:p-8'
                >
                  <div>
                    <h3 className='font-sans text-lg font-semibold tracking-tight'>
                      {job.company}
                    </h3>
                    <p className='mt-2 font-mono text-xs text-ink-subtle'>{position.period}</p>
                  </div>
                  <div className='mt-6 border-t border-line pt-6'>
                    <p className='font-medium text-accent'>{t(position.title, lang)}</p>
                    <p className='mt-3 text-sm leading-relaxed text-ink-muted'>
                      {t(job.context, lang)}
                    </p>
                    {position.highlights[0] ? (
                      <p className='mt-3 text-sm leading-relaxed text-ink-muted'>
                        {t(position.highlights[0], lang)}
                      </p>
                    ) : null}
                    {job.product ? (
                      <div className='mt-5 rounded-md border border-line bg-accent-wash p-4'>
                        <a
                          href={job.product.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='link-underline min-h-11 font-medium'
                        >
                          {job.product.name}
                          <ArrowUpRight className='h-4 w-4' aria-hidden />
                        </a>
                        <p className='mt-1 text-sm leading-relaxed text-ink-muted'>
                          {t(job.product.description, lang)}
                        </p>
                      </div>
                    ) : null}
                    <a
                      className='link-underline mt-4 min-h-11 text-sm'
                      href={job.companyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {lang === 'id' ? 'Website perusahaan' : 'Company website'}
                      <ArrowUpRight className='h-4 w-4' aria-hidden />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
          <Link className='section-jump mt-4' href={langPath(lang, '/about#experience')}>
            {lang === 'id' ? 'Lihat perjalanan karier lengkap' : 'Explore the full career history'}{' '}
            <ArrowUpRight className='h-4 w-4' aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section
        id='products'
        label={t(ui.headShipped, lang)}
        className='scroll-mt-20 border-t border-line'
      >
        <Container>
          <SectionHeading
            eyebrow={t(ui.eyebrowProducts, lang)}
            title={t(ui.headShipped, lang)}
            lead={t(ui.leadShipped, lang)}
          />
          <p className='mt-6'>
            <a
              href={profile.linkedInUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='link-underline text-sm font-medium'
            >
              {t(ui.ctaLinkedIn, lang)}
              <ArrowUpRight className='h-3.5 w-3.5' />
            </a>
          </p>
          <div className='mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2'>
            {ordered.map(project => (
              <ProjectCard key={project.slug} project={project} lang={lang} />
            ))}
          </div>
          <Link href={langPath(lang, '/archive')} className='section-jump mt-6'>
            {lang === 'id' ? 'Jelajahi arsip seluruh proyek' : 'Browse the full project archive'}{' '}
            <ArrowUpRight className='h-4 w-4' aria-hidden />
          </Link>
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
