import { AboutView } from '@/views/about'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'en', path: '/about', ...meta.about.en })

export default function Page() {
  return <AboutView lang="en" />
}
