'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Folder, Github, ExternalLink, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'

export function OtherProjects() {
  const [visibleCount, setVisibleCount] = useState(6)

  const showMoreProjects = () => {
    setVisibleCount(prev => Math.min(prev + 6, projects.length))
  }

  const hasMoreProjects = visibleCount < projects.length
  const displayedProjects = projects.slice(0, visibleCount)

  return (
    <section className="px-4 pt-20 sm:px-6 md:px-8">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-200 sm:text-3xl">Other Noteworthy Projects</h2>
          <Link href="/archive" className="font-mono text-sm text-[#64ffda] hover:underline">
            See All
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded bg-[#112240] p-8 transition-transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between">
                <Folder className="h-10 w-10 text-[#64ffda]" />
                <div className="flex items-center gap-4">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      className="text-gray-400 transition-colors hover:text-[#64ffda]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links?.playStore && (
                    <a
                      href={project.links.playStore}
                      className="text-gray-400 transition-colors hover:text-[#64ffda]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayCircle className="h-5 w-5" />
                    </a>
                  )}
                  {project.links?.web && (
                    <a
                      href={project.links.web}
                      className="text-gray-400 transition-colors hover:text-[#64ffda]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 flex grow flex-col">
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-[#64ffda]">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="mt-2 grow text-gray-400">{project.description}</p>
                )}

                {project.tags && (
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-gray-400">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="font-mono bg-[#000000] border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#000000]"
              onClick={showMoreProjects}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
