import { ArchiveView } from '@/views/archive'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'en', path: '/archive', ...meta.archive.en })

export default function Page() {
  return <ArchiveView lang="en" />
}
