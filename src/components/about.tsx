'use client'

import Image from 'next/image'
import { getBasePath } from '@/utils/base-path'

export function About() {
  const technologies = [
    ['Dart', 'Flutter', 'Java/Kotlin/Android'],
    ['Swift/iOS', 'React Native', 'Android NDK'],
    ['Jenkins (CI/CD)', 'Javascript/React.JS/Next.JS', 'Kotlin Multiplatform (KMP)'],
    ['GraphQL/REST', 'Odoo', 'Docker']
  ]

  return (
    <section id="about" className="flex min-h-screen flex-col justify-center px-4 pt-20 sm:px-6 md:px-8">
      <div className="space-y-8">
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-200 sm:text-2xl">
          <span className="font-mono text-[#64ffda]">01.</span>
          About Me
        </div>

        <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:gap-16">
          {/* Text Content */}
          <div className="w-full space-y-4 text-gray-400 md:w-2/3">
            <p>Hello! I'm Chandra, a Fullstack Engineer based in Sumedang, West Java, Indonesia.</p>

            <p>
              I have been working with Flutter since its initial release in 2017, building on 2+ years of experience in native Android development and 1+ years of experience with React Native. Throughout my career, I have contributed to a variety of mobile projects ranging from small to medium in scale, utilizing numerous frameworks and third-party libraries. My extensive experience, combined with a strong work ethic, equips me to deliver high-quality results effectively.
            </p>

            <p>
              I am currently driving the development of innovative and inclusive products at{' '}
              <a href="https://evermos.com/" target='_blank' className="text-[#64ffda] hover:underline">
                Evermos
              </a>
              .
            </p>

            <div className="space-y-2">
              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                {technologies.flat().map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 font-mono text-sm">
                    <span className="text-[#64ffda]">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/3">
            <div className="group relative h-[300px] w-[300px] mx-auto md:mx-0">
              <div className="relative h-full w-full overflow-hidden rounded">
                <div className="absolute inset-0 rounded border-2 border-[#64ffda] bg-[#64ffda] bg-opacity-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
                <Image
                  src={getBasePath('/me.jpg')}
                  alt="Profile picture"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 rounded border-2 border-[#64ffda] transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
