import { WorkView } from '@/views/work'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'en', path: '/work', ...meta.work.en })

export default function Page() {
  return <WorkView lang="en" />
}
