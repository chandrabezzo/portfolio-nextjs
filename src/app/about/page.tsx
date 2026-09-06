import Image from 'next/image'
import Link from 'next/link'
import { profile } from '@/data/profile'
import { experience } from '@/data/experience'
import { Container, Section, SectionHeading, Eyebrow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'About',
  description:
    'The engineering progression of Chandra Abdul Fattah — from web development in 2014 through native Android, React Native, and Flutter, to staff-level mobile engineering.',
  path: '/about',
})

/** Dates are the ones evidenced by the experience data. No rounded-up claims. */
const journey = [
  { year: '2014', title: 'The web', body: 'Started building with HTML, CSS, and JavaScript.' },
  { year: '2015', title: 'Solusi Bejo', body: 'Began taking on independent client work as Solusi Bejo.' },
  { year: '2016', title: 'Java backend', body: 'First professional role — building the API behind an Android consignment app.' },
  { year: '2017', title: 'Native Android', body: 'Moved into mobile properly: native Android for healthcare and enterprise clients.' },
  { year: '2018', title: 'React Native', body: 'First cross-platform work, and the first real look at what cross-platform costs.' },
  { year: '2019', title: 'Flutter', body: 'Adopted Flutter, which has been the primary platform since.' },
  { year: '2021', title: 'Native integration', body: 'Deep work at the Dart/platform boundary — platform channels, native SDKs, Kotlin and Swift.' },
  { year: '2022', title: 'SDKs, plugins, tooling', body: 'Publishing packages and building tools other engineers depend on.' },
  { year: '2023', title: 'Staff engineering', body: 'Technical direction, engineering effectiveness, and mentorship at Evermos.' },
  { year: 'Now', title: 'AI-augmented engineering', body: 'Using AI agents across the engineering loop, without handing over judgment.' },
]

export default function AboutPage() {
  return (
    <>
      <Section label="About">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-5 font-display text-display-lg text-balance">
                A decade of building for mobile.
              </h1>
              <div className="mt-8 max-w-prose space-y-4 text-lg leading-relaxed text-ink-muted">
                <p>
                  I am {profile.name}, a software engineering consultant based in{' '}
                  {profile.location}. I work as a Staff Engineer on mobile at Evermos, and
                  independently through Solusi Bejo.
                </p>
                <p>{profile.summary}</p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/5] w-full max-w-[19rem] overflow-hidden bg-raised lg:ml-auto">
                <Image
                  src="/profile/me.jpg"
                  alt={`${profile.name}, ${profile.role}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 19rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section label="Engineering journey" className="border-t border-line">
        <Container>
          <SectionHeading eyebrow="Journey" title="My engineering journey" />
          <ol className="mt-12 border-t border-line">
            {journey.map((item) => (
              <li key={item.year} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <div>
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section label="Experience" className="border-t border-line">
        <Container>
          <SectionHeading eyebrow="Experience" title="Where I have worked" />
          <div className="mt-12 space-y-14">
            {experience.map((job) => (
              <div key={job.company} className="border-t border-line pt-8">
                <div className="grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-12">
                  <div>
                    <h3 className="font-display text-xl">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-subtle">{job.context}</p>
                  </div>
                  <div className="space-y-8">
                    {job.positions.map((position) => (
                      <div key={position.title}>
                        <h4 className="font-medium">{position.title}</h4>
                        <p className="mt-0.5 font-mono text-xs text-ink-subtle">
                          {position.period}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {position.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="border-l border-line pl-4 leading-relaxed text-ink-muted"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contact">Discuss a Technical Problem</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Curriculum vitae
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
    </>
  )
}
