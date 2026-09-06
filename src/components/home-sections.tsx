import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { problems } from '@/data/problems'
import { expertise } from '@/data/expertise'
import { approach } from '@/data/approach'
import { testimonials } from '@/data/testimonials'
import { Button } from '@/components/ui/button'
import { Container, Section, SectionHeading, Eyebrow, TagRow } from '@/components/ui/primitives'

export function Hero() {
  return (
    <section aria-label="Introduction" className="border-b border-line pb-16 pt-14 sm:pb-24 sm:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
          {/* Mobile order: name → headline → description → CTA → proof → portrait (brief §65) */}
          <div>
            <Eyebrow>{profile.role}</Eyebrow>
            <h1 className="mt-5 font-display text-display-xl text-balance">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              {profile.intro}
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-ink-muted">{profile.summary}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Discuss a Technical Problem</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/work">Explore Selected Work</Link>
              </Button>
            </div>
          </div>

          <div className="order-last lg:order-none">
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
            <p className="mt-4 max-w-[19rem] font-mono text-xs leading-relaxed text-ink-subtle lg:ml-auto">
              {profile.name} · {profile.location}
            </p>
          </div>
        </div>

        {/* Proof sits inside the first screen's reach (brief §18). */}
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-16 lg:grid-cols-4">
          {profile.proof.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-display text-2xl">{item.value}</span>
                <span className="mt-1 block text-sm text-ink-muted">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function ProblemsSection() {
  return (
    <Section label="Problems I solve">
      <Container>
        <SectionHeading
          eyebrow="What I do"
          title="Problems I solve"
          lead="Engagements usually start with one of these. The technology matters less than the shape of the problem."
        />
        <div className="mt-12 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-ground p-7">
              <h3 className="font-display text-xl">{problem.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{problem.description}</p>
              <p className="mt-5 font-mono text-xs text-ink-subtle">{problem.stack}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function ExpertiseSection() {
  return (
    <Section label="Areas of expertise" className="border-t border-line">
      <Container>
        <SectionHeading eyebrow="Expertise" title="Areas of expertise" />
        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {expertise.slice(0, 6).map((item) => (
            <div key={item.slug} className="border-t border-line pt-6">
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{item.summary}</p>
              <div className="mt-4">
                <TagRow items={item.stack} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12">
          <Link href="/expertise" className="link-underline text-sm font-medium">
            All areas of expertise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </Container>
    </Section>
  )
}

export function ApproachSection() {
  return (
    <Section deep label="Engineering approach">
      <Container>
        <div className="max-w-narrow">
          <Eyebrow className="mb-4">AI-Augmented Engineering</Eyebrow>
          <h2 className="font-display text-display-md text-balance">
            Engineering judgment, accelerated by AI.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-deep-muted">
            I use AI coding agents throughout research, implementation, debugging, testing,
            review, documentation, and automation — while keeping architecture decisions,
            trade-offs, and quality accountable to engineering judgment.
          </p>
        </div>

        <ol className="mt-14 grid gap-px border-t border-deep-line bg-deep-line sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step) => (
            <li key={step.step} className="bg-deep p-6">
              <span className="font-mono text-xs text-deep-accent">{step.step}</span>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-deep-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

export function TestimonialsSection() {
  if (testimonials.length === 0) return null
  const hasPlaceholders = testimonials.some((t) => t.placeholder)

  return (
    <Section label="Testimonials" className="border-t border-line">
      <Container>
        <SectionHeading eyebrow="Social proof" title="What colleagues say" />

        {hasPlaceholders ? (
          <p className="mt-6 border-l-2 border-accent bg-accent-wash px-4 py-3 font-mono text-xs text-ink-muted">
            Placeholder content — awaiting real recommendations. Not for production.
          </p>
        ) : null}

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author + t.title} className="border-t border-line pt-6">
              <blockquote className="leading-relaxed text-ink">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-5">
                <span className="block text-sm font-medium">{t.author}</span>
                <span className="mt-0.5 block text-sm text-ink-subtle">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function AboutSummarySection() {
  return (
    <Section label="About" className="border-t border-line">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading eyebrow="About" title={`About ${profile.name.split(' ')[0]}`} />
          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>
              I started building for the web in 2014 with HTML, CSS, and JavaScript, moved into
              Java backend work, then into native Android — which is where mobile stopped being a
              side interest and became the career.
            </p>
            <p>
              React Native came next, then Flutter from around 2019. Since then most of my work has
              lived at the seam between Dart and the native platform: SDKs, plugins, platform
              channels, and the architecture that holds an app together once it is too large for
              any one person to keep in their head.
            </p>
            <p>
              Today I work as a Staff Engineer on mobile at Evermos, and independently through
              Solusi Bejo.
            </p>
            <p>
              <Link href="/about" className="link-underline text-base font-medium">
                Read the full story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function CtaSection() {
  return (
    <Section deep label="Contact">
      <Container>
        <div className="max-w-narrow">
          <h2 className="font-display text-display-md text-balance">
            Facing a problem at the edge of the platform?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-deep-muted">
            Tell me what you are building, what is breaking, or what decision you are stuck on.
            If I am not the right person, I will say so.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="deep">
              <Link href="/contact">Discuss a Technical Problem</Link>
            </Button>
            <Button asChild size="lg" variant="deep-outline">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
