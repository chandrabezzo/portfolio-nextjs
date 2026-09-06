import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Discuss a Technical Problem',
  description:
    'Start a conversation about building, modernizing, integrating, or debugging a mobile system — Flutter, Android, iOS, SDKs, plugins, and developer tooling.',
  path: '/contact',
})

/**
 * Static site, so the "form" is a set of pre-addressed mailto links. Each one
 * classifies the enquiry in the subject, which is the whole point of §37 —
 * no backend, no third-party form service, no JavaScript.
 */
const enquiries = [
  { label: 'Build a mobile application', subject: 'Building a mobile application' },
  { label: 'Modernize an existing Flutter application', subject: 'Modernizing a Flutter application' },
  { label: 'Integrate an Android or iOS SDK', subject: 'Native SDK integration' },
  { label: 'Build a plugin or SDK', subject: 'Plugin / SDK engineering' },
  { label: 'Architecture or technical review', subject: 'Architecture / technical review' },
  { label: 'Developer tooling', subject: 'Developer tooling' },
  { label: 'Another engineering problem', subject: 'Engineering problem' },
]

export default function ContactPage() {
  return (
    <Section label="Contact">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 font-display text-display-lg text-balance">
              Tell me what you are building.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              The most useful first message describes the problem, the constraints, and what you
              have already tried. If I am not the right person for it, I will tell you that
              directly — and point you somewhere better where I can.
            </p>

            <div className="mt-12">
              <p className="eyebrow mb-5">What do you need?</p>
              <ul className="border-t border-line">
                {enquiries.map((enquiry) => (
                  <li key={enquiry.subject} className="border-b border-line">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(enquiry.subject)}`}
                      className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
                    >
                      <span>{enquiry.label}</span>
                      <span
                        aria-hidden
                        className="font-mono text-sm text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="border border-line bg-raised p-7">
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline mt-2 block break-all font-display text-lg"
              >
                {profile.email}
              </a>

              <p className="eyebrow mt-8">Elsewhere</p>
              <ul className="mt-2 space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-muted hover:text-accent"
                    >
                      {link.label} <span className="text-ink-subtle">· {link.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-8">Based in</p>
              <p className="mt-2 text-sm text-ink-muted">{profile.location}</p>
            </div>
          </div>
        </div>

        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ])}
        />
      </Container>
    </Section>
  )
}
