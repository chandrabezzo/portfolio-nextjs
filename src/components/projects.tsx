import Image from 'next/image'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  links: {
    playStore?: string
    appStore?: string
    web?: string
  }
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Evermos Application',
      description: 'An app made with flutter and tensorflow lite for face mask detection.',
      tags: ['Flutter', 'TensorFlow Lite', 'ML'],
      image: 'https://i.ytimg.com/vi/4Dgyk45bT2c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5EXgyHiUdZQPXep6uTvrI9HqcFw',
      links: {
        playStore: 'https://github.com/example/face-mask-detection',
        appStore: 'https://example.com/face-mask-detection',
        web: 'https://example.com/face-mask-detection'
      }
    }
  ] as const;

  return (
    <section id="work" className="flex min-h-screen flex-col justify-center px-4 pt-20 sm:px-6 md:px-8">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-200 sm:text-2xl">
          <span className="font-mono text-[#64ffda]">03.</span>
          Some Things I've Built
        </div>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative grid gap-8 md:grid-cols-2 md:gap-4"
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative aspect-[5/3] overflow-hidden rounded bg-[#64ffda]/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="object-cover mix-blend-multiply filter brightness-100 transition-all duration-300 group-hover:mix-blend-normal group-hover:brightness-110"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <p className="font-mono text-sm text-[#64ffda]">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-gray-200">{project.title}</h3>

                  <div className={`relative mt-4 rounded bg-[#112240] p-6 text-base text-gray-400 shadow-xl ${index % 2 === 0 ? 'md:ml-[-50px]' : 'md:mr-[-50px]'
                    }`}>
                    {project.description}
                  </div>

                  <ul className={`mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-gray-400 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div className={`mt-4 flex items-center gap-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        className="text-gray-300 transition-colors hover:text-[#64ffda]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="https://www.svgrepo.com/show/223032/playstore.svg" alt="Play Store" className="h-5 w-5" />
                      </a>
                    )}
                    {project.links.appStore && (
                      <a
                        href={project.links.appStore}
                        className="text-gray-300 transition-colors hover:text-[#64ffda]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt="Play Store" className="h-5 w-5" />
                      </a>
                    )}
                    {project.links.web && (
                      <a
                        href={project.links.web}
                        className="text-gray-300 transition-colors hover:text-[#64ffda]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="https://www.svgrepo.com/show/229032/internet.svg" alt="Web" className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
