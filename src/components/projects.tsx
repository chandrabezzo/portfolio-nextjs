'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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

const projects: Project[] = [
  {
    title: 'Evermos Application',
    description: 'Evermos is a sharia-based reseller ecosystem that connects curated halal local products with a vast network of resellers across Indonesia. Powered by advanced technology and a scalable Flutter architecture, we ensure a seamless, high-performance experience across Android and iOS. Combined with comprehensive training programs, Evermos drives sustainable business growth and empowers resellers nationwide.',
    tags: ['Flutter', 'Android', 'iOS'],
    image: 'https://i.ytimg.com/vi/4Dgyk45bT2c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5EXgyHiUdZQPXep6uTvrI9HqcFw',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=evermos.evermos.com.evermos',
      appStore: 'https://apps.apple.com/id/app/evermos-reseller-dropship/id1601568866',
      web: 'https://evermos.com'
    }
  },
  {
    title: 'All Beauty (A Lux Life)',
    description: 'Online retailer that sells beauty and fragrance products. They offer a wide selection of brands, including high-profile bestsellers, prestige, artisan, cult, and niche brands.',
    tags: ['Dart', 'Flutter'],
    image: 'https://theindustry.beauty/wp-content/uploads/2021/09/allbeauty.jpg',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.aluxlife.app',
      appStore: 'https://apps.apple.com/id/app/a-lux-life/id1498084784',
      web: 'https://www.allbeauty.com/'
    }
  },
  {
    title: 'Reyo Caller',
    description: 'Reyo will be your safe place to talk about anything. Remember, you’re not alone and there will always be someone to listen to you.',
    tags: ['Dart', 'Flutter'],
    image: 'https://www.helloreyo.com/wp-content/uploads/2021/08/Cover.png',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.reyo.caller',
      appStore: 'https://apps.apple.com/id/app/reyo-talk-without-judgment/id1633000202',
      web: 'https://www.helloreyo.com/id/home-id/'
    }
  },
  {
    title: 'Reyo Listener',
    description: 'Reyo will be your safe place to talk about anything. Remember, you’re not alone and there will always be someone to listen to you.',
    tags: ['Dart', 'Flutter'],
    image: 'https://www.helloreyo.com/wp-content/uploads/2021/08/Cover.png',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.reyo.listener',
      appStore: 'https://apps.apple.com/id/app/reyo-listener/id1633000544',
      web: 'https://www.helloreyo.com/id/home-id/'
    }
  },
  {
    title: 'Klik Dokter',
    description: 'Healthy life is something that everyone should aim for. Let’s #JagaSehatmu and your loved ones! KlikDokter is here to accompany you to reach your healthy life through our integrated healthcare services.',
    tags: ['Kotlin', 'Android'],
    image: 'https://play-lh.googleusercontent.com/zlhFreu-MC09Ln51Ct0NZERQ121NcTObIhj7m4kxNK0he6zv6uH4AM6D0pgkey6ZH75X',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.codigo.klikdokter',
      appStore: 'https://apps.apple.com/us/app/klikdokter-jaga-sehatmu/id1001542966',
      web: 'https://www.klikdokter.com/'
    }
  },
  {
    title: 'Relaxology',
    description: 'RX Relaxology, a one-stop solution for all your grooming needs. We present services specifically designed to provide the ultimate relaxation experience, right from your fingertips.',
    tags: ['Dart', 'Flutter'],
    image: 'https://linktr.ee/og/image/rx.relaxology.jpg',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=co.id.relax',
      appStore: 'https://apps.apple.com/id/app/relaxology/id6459829813',
      web: 'https://relax.co.id/'
    }
  },
  {
    title: 'Help U Helper',
    description: 'Help U is a professional cleaning service application under the professional parent company, namely Carefast, for all lines of property ranging from houses, apartments, boarding houses, offices, motels, restaurants and others.',
    tags: ['Dart', 'Flutter'],
    image: 'https://help-u.id/assets/images/banner/banner.png',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.helpu.helper',
    }
  },
  {
    title: 'Help U',
    description: 'Help U is a professional cleaning service application under the professional parent company, namely Carefast, for all lines of property ranging from houses, apartments, boarding houses, offices, motels, restaurants and others.',
    tags: ['Dart', 'Flutter'],
    image: 'https://help-u.id/assets/images/banner/banner.png',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.helpu.android',
    }
  },
  {
    title: 'KBPP POLRI',
    description: 'Help U is a professional cleaning service application under the professional parent company, namely Carefast, for all lines of property ranging from houses, apartments, boarding houses, offices, motels, restaurants and others.',
    tags: ['Dart', 'Flutter'],
    image: 'https://asset-2.tstatic.net/makassar/foto/bank/images/ilustrasi-logo-kbpp-polri-1-15102021.jpg',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.kbpppolri.internal',
      web: 'https://app.kbpp-polri.or.id/'
    }
  },
  {
    title: 'Mangusada On Mobile',
    description: 'Mobile Application for patient registration in RSD Mangusada Badung Bali',
    tags: ['Dart', 'Flutter'],
    image: 'https://rsudmangusada.badungkab.go.id/uploads/slider/slider_191810051001_RSDMangusada.jpg',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.go.badungkab.rsudmangusada.pasien',
      web: 'https://rsudmangusada.badungkab.go.id/'
    }
  },
] as const;

export function Projects() {
  // Initialize with showing all projects for static rendering
  const [isClient, setIsClient] = useState(false)
  const [visibleCount, setVisibleCount] = useState(projects.length)

  useEffect(() => {
    setIsClient(true)
    setVisibleCount(2)
  }, [])

  return (
    <section id="work" className="flex min-h-screen flex-col justify-center px-4 pt-20 sm:px-6 md:px-8">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-200 sm:text-2xl">
          <span className="font-mono text-[#64ffda]">03.</span>
          Some Things I've Built
        </div>
        <br />
        <span className="font-mono text-gray-400">I have developed numerous applications throughout my career. Some of my clients have chosen to discontinue their services on the Play Store, App Store, or websites. As a result, some of the applications I built with them may no longer be available. For more details, a summary of the applications I have developed is included in <Link href="https://drive.google.com/drive/folders/1VZaL5inHTdbDvRIAHPsYARvZ89IhHa-5?usp=sharing" className="font-mono text-sm text-[#64ffda] hover:underline">my curriculum vitae</Link>.</span>
        <div className="space-y-24">
          {(isClient ? projects.slice(0, visibleCount) : projects).map((project, index) => (
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
                    className="object-cover brightness-100 transition-all"
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
        {isClient && visibleCount < projects.length && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="font-mono bg-[#000000] border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#000000]"
              onClick={() => setVisibleCount(prev => Math.min(prev + 2, projects.length))}
            > Show More

            </Button>

          </div>
        )}
      </div>
    </section>
  )
}
