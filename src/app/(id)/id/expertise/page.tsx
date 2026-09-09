import { ExpertiseView } from '@/views/expertise'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'id', path: '/expertise', ...meta.expertise.id })

export default function Page() {
  return <ExpertiseView lang="id" />
}
