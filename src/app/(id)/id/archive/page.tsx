import { ArchiveView } from '@/views/archive'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'id', path: '/archive', ...meta.archive.id })

export default function Page() {
  return <ArchiveView lang="id" />
}
