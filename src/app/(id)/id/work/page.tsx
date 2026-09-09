import { WorkView } from '@/views/work'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'id', path: '/work', ...meta.work.id })

export default function Page() {
  return <WorkView lang="id" />
}
