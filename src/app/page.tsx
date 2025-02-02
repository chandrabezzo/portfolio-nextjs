import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { About } from '@/components/about'
import { OtherProjects } from '@/components/other-projects'

export default function Home() {
  return (
    <main itemScope itemType="https://schema.org/Person">
      <article className="h-full">
        <section id="hero" aria-label="Introduction">
          <Hero />
        </section>
        
        <section id="about" aria-label="About Me">
          <About />
        </section>
        
        <section id="experience" aria-label="Work Experience">
          <Experience />
        </section>
        
        <section id="projects" aria-label="Featured Projects">
          <Projects />
        </section>
        
        <section id="other-projects" aria-label="Other Projects">
          <OtherProjects />
        </section>
        
        <section id="contact" aria-label="Contact Information">
          <Contact />
        </section>
        
        <Footer />
      </article>
    </main>
  )
}
