import { ContactView } from '@/views/contact'
import { pageMetadata } from '@/lib/site'
import { meta } from '@/lib/page-meta'

export const metadata = pageMetadata({ lang: 'id', path: '/contact', ...meta.contact.id })

export default function Page() {
  return <ContactView lang="id" />
}
