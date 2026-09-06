import { slug as githubSlug } from 'github-slugger'

/** Derived from the raw MDX so it always matches rehype-slug's ids. */
export function TableOfContents({ body }: { body: string }) {
  const headings = body
    .split('\n')
    .filter((line) => /^##\s+/.test(line))
    .map((line) => line.replace(/^##\s+/, '').trim())

  if (headings.length < 3) return null

  return (
    <nav aria-label="Table of contents" className="not-prose mb-12 border-y border-line py-6">
      <p className="eyebrow mb-4">Contents</p>
      <ol className="space-y-2">
        {headings.map((heading) => (
          <li key={heading}>
            <a
              href={`#${githubSlug(heading)}`}
              className="text-sm text-ink-muted hover:text-accent"
            >
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
