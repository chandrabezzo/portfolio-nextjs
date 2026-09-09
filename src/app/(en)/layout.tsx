import type { ReactNode } from 'react'
import '../globals.css'
import { RootHtml } from '@/components/root-html'
import { rootMetadata } from '@/lib/root-metadata'

export const metadata = rootMetadata('en')

export default function EnLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>
}
