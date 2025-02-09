'use client'

import { Github, ExternalLink, PlayCircle } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Archive() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="mt-8 mb-12">
        <h1 className="text-5xl font-bold text-[#ccd6f6] mb-4">Archive</h1>
        <p className="text-xl text-[#8892b0]">A list of things I've worked on</p>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#233554]">
              <th className="py-4 pr-4 text-sm font-normal text-[#64ffda]">Year</th>
              <th className="py-4 pr-4 text-sm font-normal text-[#64ffda]">Title</th>
              <th className="py-4 pr-4 text-sm font-normal text-[#64ffda]">Made at</th>
              <th className="py-4 pr-4 text-sm font-normal text-[#64ffda]">Built with</th>
              <th className="py-4 text-sm font-normal text-[#64ffda]">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-[#233554] hover:bg-[#112240]">
                <td className="whitespace-nowrap py-4 pr-4 text-sm">{project.year}</td>
                <td className="py-4 pr-4 text-sm font-medium text-[#ccd6f6]">{project.title}</td>
                <td className="py-4 pr-4 text-sm">{project.madeAt}</td>
                <td className="py-4 pr-4 text-sm">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="whitespace-nowrap">
                        {tag}
                        {tagIndex < (project.tags?.length || 0) - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 text-sm">
                  <div className="flex gap-3">
                    {project.links?.github && (
                      <button
                        onClick={() => window.open(project.links!.github, '_blank')}
                        className="text-[#a8b2d1] hover:text-[#64ffda]"
                      >
                        <Github size={20} />
                      </button>
                    )}
                    {project.links?.appStore && (
                      <button
                        onClick={() => window.open(project.links!.appStore, '_blank')}
                        className="text-[#a8b2d1] hover:text-[#64ffda]"
                      >
                        <ExternalLink size={20} />
                      </button>
                    )}
                    {project.links?.playStore && (
                      <button
                        onClick={() => window.open(project.links!.playStore, '_blank')}
                        className="text-[#a8b2d1] hover:text-[#64ffda]"
                      >
                        <PlayCircle size={20} />
                      </button>
                    )}
                    {project.links?.web && !project.links?.appStore && (
                      <button
                        onClick={() => window.open(project.links!.web, '_blank')}
                        className="text-[#a8b2d1] hover:text-[#64ffda]"
                      >
                        <ExternalLink size={20} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
