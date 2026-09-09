import { MDXRemote } from 'next-mdx-remote-client/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

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
  a: ({ href = '', ...props }: ComponentProps<'a'>) => {
    if (href.startsWith('/') && !href.startsWith('//')) {
      return <Link href={href} {...props} />
    }
    if (/^(https?:)?\/\//i.test(href)) {
      return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    }
    return <a href={href} {...props} />
  },
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
            [
              rehypePrettyCode,
              {
                // Emits both palettes as CSS variables so code blocks follow the
                // site theme instead of being locked to one. Build-time only:
                // zero highlighting JavaScript reaches the browser.
                //
                // The high-contrast variants, not the plain ones: keepBackground
                // is off, so tokens sit on the site's off-white and dark ground
                // rather than GitHub's, and github-light's comment (#6a737d) and
                // keyword (#d73a49) both landed under 4.5:1 there.
                theme: {
                  light: 'github-light-high-contrast',
                  dark: 'github-dark-high-contrast',
                },
                keepBackground: false,
              },
            ],
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
        },
      }}
    />
  )
}
