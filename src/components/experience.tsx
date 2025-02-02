'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Job {
  company: string
  positions: {
    title: string
    period: string
    responsibilities: string[]
  }[]
}

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const jobs: Job[] = [
    {
      company: 'Evermos',
      positions: [
        {
          title: 'Staff Engineer at Mobile App',
          period: 'April 2023 — Now',
          responsibilities: [
            'Setting Technical Direction',
            'Mentorship and Sponsorship',
            'Providing Engineering Perspective',
            'Exploration',
            'Being Glue'
          ]
        },
        {
          title: 'Senior Mobile Engineer',
          period: 'January 2022 — April 2023',
          responsibilities: [
            'Build solid team of Mobile Apps Engineer at Evermos',
            'Enhanced development experience',
            'Increased app robustness'
          ]
        },
        {
          title: 'Middle Mobile Engineer',
          period: 'March 2021 — December 2021',
          responsibilities: [
            'Build Ikhtiar by Evermos from scratch for Android and iOS',
            'Setup the architecture and project structure',
            'Define modules that needed by mobile application',
            'Feature improvement and bug fixing in Evermos Android'
          ]
        }
      ]
    },
    {
      company: 'Docotel',
      positions: [
        {
          title: 'Mobile Engineer',
          period: 'December 2018 — March 2021',
          responsibilities: [
            'Build and maintain mobile applications for patient registration for Docotel hospital client',
            'Setup an architecture and project structure for the mobile application in healthcare information system sector',
            'Research smart watch for patient in hospital'
          ]
        }
      ]
    },
    {
      company: 'Jasamedika',
      positions: [
        {
          title: 'Mobile Developer',
          period: 'August 2017 — November 2018',
          responsibilities: [
            'Build and maintain mobile applications for patient registration for Jasamedika hospital client',
            'Build and maintain mobile application for HRIS in Artha Graha Group',
          ]
        }
      ]
    },
    {
      company: 'Tujuh Sembilan',
      positions: [
        {
          title: 'Software Engineer - Internship',
          period: 'July 2016 — September 2016',
          responsibilities: [
            'Develop API for consignation app for Android',
          ]
        }
      ]
    },
    {
      company: 'Solusi Bejo',
      positions: [
        {
          title: 'Freelancer Engineer',
          period: 'July 2015 — Now',
          responsibilities: [
            'Build mobile application for Android and iOS',
            'Build web application',
            'Manage Project'
          ]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="flex min-h-screen flex-col justify-center px-4 pt-8 sm:px-6 md:px-8">
      <div className="space-y-8">
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-200 sm:text-2xl">
          <span className="font-mono text-[#64ffda]">02.</span>
          Where I've Worked
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex overflow-x-auto md:h-fit md:flex-col md:border-l md:border-gray-600">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={cn(
                  'whitespace-nowrap border-b-2 border-gray-600 px-4 py-3 text-left font-mono text-sm md:whitespace-normal md:border-b-0 md:border-l-2 md:border-gray-600 md:min-w-[200px]',
                  activeTab === index
                    ? 'border-b-[#64ffda] text-[#64ffda] md:border-b-0 md:border-l-[#64ffda]'
                    : 'text-gray-400 hover:bg-[#64ffda]/10 hover:text-[#64ffda]'
                )}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="min-h-[320px] py-2">
            <div className="space-y-8">
              {jobs[activeTab]?.positions.map((position, index) => (
                <div key={index} className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg text-gray-200 sm:text-xl">
                      {position.title}{' '}
                      <span className="text-[#64ffda]">@ {jobs[activeTab]?.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-gray-400 sm:text-sm">{position.period}</p>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {position.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex gap-2 text-sm text-gray-400 sm:text-base">
                        <span className="text-[#64ffda]">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
