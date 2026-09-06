import { MDXRemote } from 'next-mdx-remote-client/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import Link from 'next/link'
import type { ReactNode } from 'react'

/** Callout used inside long-form content. */
function Callout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <aside className="not-prose my-8 border-l-2 border-accent bg-accent-wash px-5 py-4">
      {title ? <p className="font-display text-base font-medium text-ink">{title}</p> : null}
      <div className="mt-1 leading-relaxed text-ink-muted">{children}</div>
    </aside>
  )
}

const components = {
  Callout,
  a: ({ href = '', ...props }: { href?: string }) =>
    href.startsWith('/') ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ),
}

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            // Build-time highlighting — zero client JS in the static export.
            [rehypePrettyCode, { theme: 'github-light', keepBackground: false }],
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
        },
      }}
    />
  )
}
