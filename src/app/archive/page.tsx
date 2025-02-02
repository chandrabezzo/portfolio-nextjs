'use client'

import { Github, ExternalLink, PlayCircle } from 'lucide-react'
import { Layout } from '@/components/layout'

interface Project {
  title: string
  description?: string
  tags?: string[]
  year?: string
  madeAt?: string
  links?: {
    github?: string
    playStore?: string
    appStore?: string
    web?: string
  }
}

export default function Archive() {
  const projects: Project[] = [
    {
      year: '2021',
      title: 'Flutter Callkit Incoming',
      madeAt: '—',
      tags: ['Dart', 'Flutter', 'Callkit', 'Pushkit', 'Incoming'],
      links: { github: '#' }
    },
    {
      year: '2021',
      title: 'Flutter Template',
      madeAt: '—',
      tags: ['Dart', 'Flutter', 'Provider', 'Dio', 'MVVM'],
      links: { github: '#', web: '#' }
    },
    {
      year: '2021',
      title: 'Flutter app for Realtime Object Detection',
      madeAt: '—',
      tags: ['Dart', 'Flutter', 'Tensorflow Lite', 'Tiny Yolov2', 'SSD MobileNet'],
      links: { github: '#' }
    },
    {
      year: '2021',
      title: 'Dressage Horse Training (DHT)',
      madeAt: 'Bornz Limited',
      tags: ['React Native', 'Redux', 'Video', 'Offline', 'Chromecast'],
      links: { appStore: '#', playStore: '#', web: '#' }
    },
    {
      year: '2021',
      title: 'Flutter app for Face mask detection',
      madeAt: '—',
      tags: ['Dart', 'Flutter', 'Tensorflow Lite'],
      links: { github: '#', web: '#' }
    },
    {
      year: '2020',
      title: '3Km',
      madeAt: '3KM Technology',
      tags: ['React Native', 'Redux', 'Redux Thunk', 'Zalo'],
      links: { appStore: '#', playStore: '#', web: '#' }
    },
    {
      year: '2020',
      title: 'Healent',
      madeAt: 'Kitchry Health',
      tags: ['React Native', 'Redux', 'Video', 'Chat', 'Agora'],
      links: { appStore: '#', playStore: '#', web: '#' }
    },
    {
      year: '2020',
      title: 'React Native Template using Typescript',
      madeAt: '—',
      tags: ['React Native', 'React Navigation', 'Redux', 'Redux Sagas'],
      links: { github: '#' }
    },
    {
      year: '2020',
      title: 'Commute by Moses',
      madeAt: '—',
      tags: ['Flutter', 'Provider', 'Firebase', 'Zendesk', 'Stripe'],
      links: { appStore: '#', playStore: '#', web: '#' }
    },
    {
      year: '2020',
      title: 'Soundwise Audio',
      madeAt: 'Soundwise',
      tags: ['React Native', 'Redux', 'Redux Saga', 'Firebase'],
      links: { appStore: '#', playStore: '#', web: '#' }
    }
  ]

  return (
    <Layout>
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
    </Layout>
  )
}
