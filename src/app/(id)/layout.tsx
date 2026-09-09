import type { ReactNode } from 'react'
import '../globals.css'
import { RootHtml } from '@/components/root-html'
import { rootMetadata } from '@/lib/root-metadata'

export const metadata = rootMetadata('id')

export default function IdLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="id">{children}</RootHtml>
}
