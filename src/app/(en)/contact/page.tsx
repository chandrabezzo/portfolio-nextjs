import { ContactView } from '@/views/contact'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'en', path: '/contact', ...meta.contact.en })

export default function Page() {
  return <ContactView lang="en" />
}
