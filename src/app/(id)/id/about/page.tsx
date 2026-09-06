import { AboutView } from '@/views/about'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'id', path: '/about', ...meta.about.id })

export default function Page() {
  return <AboutView lang="id" />
}
