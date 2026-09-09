import { OpenSourceView } from '@/views/open-source'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'en', path: '/open-source', ...meta.openSource.en })

export default function Page() {
  return <OpenSourceView lang="en" />
}
