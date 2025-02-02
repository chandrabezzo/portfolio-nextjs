import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { About } from '@/components/about'
import { OtherProjects } from '@/components/other-projects'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
      <Contact />
      <Footer />
    </>
  )
}
