import { OpenSourceView } from '@/views/open-source'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'id', path: '/open-source', ...meta.openSource.id })

export default function Page() {
  return <OpenSourceView lang="id" />
}
