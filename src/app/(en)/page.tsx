import { HomeView } from '@/views/home'
import { pageMetadata, siteMeta } from '@/lib/site'

export const metadata = pageMetadata({
  lang: 'en',
  path: '/',
  title: siteMeta.en.title,
  description: siteMeta.en.description,
})

export default function Page() {
  return <HomeView lang="en" />
}
