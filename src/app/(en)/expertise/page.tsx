import { ExpertiseView } from '@/views/expertise'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'en', path: '/expertise', ...meta.expertise.en })

export default function Page() {
  return <ExpertiseView lang="en" />
}
