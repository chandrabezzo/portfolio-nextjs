import { HomeView } from '@/views/home'
import { pageMetadata, siteMeta } from '@/lib/site'

export const metadata = pageMetadata({
  lang: 'id',
  path: '/',
  title: siteMeta.id.title,
  description: siteMeta.id.description,
})

export default function Page() {
  return <HomeView lang="id" />
}
