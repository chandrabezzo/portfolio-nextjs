import { openSource } from '@/data/open-source'
import { projects } from '@/data/projects'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { pageMetadata } from '@/lib/site'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Archive',
  description:
    'A complete list of applications, packages, plugins, and contributions built by Chandra Abdul Fattah.',
  path: '/archive',
})

interface Row {
  year: number | string
  title: string
  madeAt: string
  built: string[]
  href?: string
  hrefLabel?: string
}

export default function ArchivePage() {
  const rows: Row[] = [
    ...projects.map((p) => ({
      year: p.year ?? '—',
      title: p.title,
      madeAt: p.company ?? '—',
      built: p.technologies,
      href: p.links?.playStore ?? p.links?.appStore ?? p.links?.website,
      hrefLabel: p.links?.playStore ? 'Play Store' : p.links?.appStore ? 'App Store' : 'Website',
    })),
    ...openSource.map((p) => ({
      year: p.year,
      title: p.title,
      madeAt: p.madeAt,
      built: p.technologies,
      href: p.links.pubDev ?? p.links.github,
      hrefLabel: p.links.pubDev ? 'pub.dev' : 'GitHub',
    })),
  ].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <Section label="Archive">
      <Container>
        <Eyebrow>Archive</Eyebrow>
        <h1 className="mt-5 font-display text-display-lg">Everything</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
          The complete list — applications, packages, plugins, and upstream contributions. Some
          client applications have since been withdrawn from the stores by their owners.
        </p>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">All projects by year</caption>
            <thead>
              <tr className="border-b border-line-strong">
                {['Year', 'Title', 'Made at', 'Built with', 'Link'].map((h) => (
                  <th key={h} scope="col" className="eyebrow py-3 pr-6 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.title}-${row.year}`} className="border-b border-line align-top">
                  <td className="whitespace-nowrap py-4 pr-6 font-mono text-sm text-ink-subtle">
                    {row.year}
                  </td>
                  <td className="py-4 pr-6 font-medium">{row.title}</td>
                  <td className="py-4 pr-6 text-sm text-ink-muted">{row.madeAt}</td>
                  <td className="py-4 pr-6 text-sm text-ink-muted">{row.built.join(' · ')}</td>
                  <td className="py-4 text-sm">
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {row.hrefLabel}
                      </a>
                    ) : (
                      <span className="text-ink-subtle">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <JsonLd
          schema={breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Archive', path: '/archive' },
          ])}
        />
      </Container>
    </Section>
  )
}
