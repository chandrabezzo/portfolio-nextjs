'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Folder, Github, ExternalLink, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OtherProject {
  title: string
  description?: string
  tags?: string[]
  links?: {
    github?: string
    playStore?: string
    appStore?: string
    web?: string
  }
}

export function OtherProjects() {
  const [visibleCount, setVisibleCount] = useState(6)
  const projects: OtherProject[] = [
    {
      title: 'Package Rename Plus',
      description: 'A Blazingly Fast way to configure your awesome flutter project to be production ready.',
      tags: ['Dart', 'Flutter', 'Android', 'iOS', 'Web', 'Windows', 'Linux', 'Mac OS'],
      links: { github: 'https://github.com/chandrabezzo/package_rename', web: 'https://pub.dev/packages/package_rename_plus' }
    },
    {
      title: 'Country Code Picker',
      description: 'A flutter package for showing a country code selector. In addition it gives the possibility to select a list of favorites countries, as well as to search using a simple searchbox',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/CountryCodePicker', web: 'https://pub.dev/packages/country_code_picker' }
    },
    {
      title: 'Flutter InAppWebview',
      description: 'A Flutter plugin that allows you to add an inline webview, to use an headless webview, and to open an in-app browser window.',
      tags: ['Dart', 'Flutter', 'Android', 'iOS'],
      links: { github: 'https://github.com/pichillilorenzo/flutter_inappwebview/pull/1381', web: 'https://pub.dev/packages/flutter_inappwebview' }
    },
    {
      title: 'Growthbook',
      description: 'An open-source feature flagging and experimentation platform that makes it simple to alter features and execute A/B testing.',
      tags: ['Dart', 'Flutter', 'Android', 'iOS', 'Web'],
      links: { github: 'https://github.com/growthbook/growthbook-flutter', web: 'https://pub.dev/packages/growthbook_sdk_flutter' }
    },
    {
      title: 'Flutter Dynamic Icon Plus',
      description: 'A flutter plugin for dynamically changing app icon and app icon batch number (iOS only) in the mobile platform.',
      tags: ['Dart', 'Flutter', 'Android', 'iOS'],
      links: { github: 'https://github.com/chandrabezzo/flutter_dynamic_icon_plus', web: 'https://pub.dev/packages/flutter_dynamic_icon_plus' }
    },
    {
      title: 'Analytics Debugger',
      description: 'A tools to debugging your logger represented with user interface. This plugin allows you to create togglable UI to show list of background events, useful to check analytics events tracker, network, or anything in debug builds.',
      tags: ['Dart', 'Flutter', 'Android', 'iOS'],
      links: { github: 'https://github.com/chandrabezzo/analytics_debugger', web: 'https://pub.dev/packages/analytics_debugger' }
    },
    {
      title: 'Flutter Summernote',
      description: 'Text Editor in Flutter for Android and iOS to help free write WYSIWYG HTML code based on Summernote 0.8.18 javascript wrapper.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/flutter_summernote', web: 'https://pub.dev/packages/flutter_summernote' }
    },
    {
      title: 'Flutter Avo Inspector',
      description: 'Avo Inspector for Dart. Find out what\'s wrong with your data. The first step to better analytics governance is knowing what\'s wrong with your data today.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/flutter_avo_inspector', web: 'https://pub.dev/packages/flutter_avo_inspector' }
    },
    {
      title: 'Odoo API Plus',
      description: 'Odoo JSON RPC Connector library for Flutter allows you to connect with Odoo 8.0+. Authenticate, Read data, updating and creating data, JSON type controllers, custom model methods',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/odoo_api_plus', web: 'https://pub.dev/packages/odoo_api_plus' }
    },
    {
      title: 'Flutter Odoo RPC',
      description: 'Odoo RPC Client library for Dart with session changes tracking via steam.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/flutter_odoo_rpc', web: 'https://pub.dev/packages/flutter_odoo_rpc' }
    },
    {
      title: 'Flutter Searchable Dropdown',
      description: 'Widget to let the user search through a keyword string typed on a customizable keyboard in a single or multiple choices list presented as a dropdown in a dialog box or a menu.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/flutter_searchable_dropdown', web: 'https://pub.dev/packages/flutter_searchable_dropdown' }
    },
    {
      title: 'Screenshot Callback Plus',
      description: 'Flutter plugin that allows you to detect screenshot and execute callback functions.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/screenshot_callback_plus', web: 'https://pub.dev/packages/screenshot_callback_plus' }
    },
    {
      title: 'Flutter Meta SDK',
      description: 'Meta SDK for Flutter. This package allow you to integration with Facebook SDK using developer facebook dashboard, track flutter app events, and etc.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/flutter_meta_sdk', web: 'https://pub.dev/packages/flutter_meta_sdk' }
    },
    {
      title: 'Gradient Widget Plus',
      description: 'A minimal set of Flutter widgets encased with beautiful gradients.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/Gradient-Widgets', web: 'https://pub.dev/packages/gradient_widgets_plus' }
    },
    {
      title: 'Meta Facebook Login',
      description: 'A Flutter plugin for allowing users to authenticate with native Android &amp; iOS Facebook login SDKs.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/chandrabezzo/meta_facebook_login', web: 'https://pub.dev/packages/meta_facebook_login' }
    },
    {
      title: 'Flutter Showcaseview',
      description: 'A Flutter package to Showcase/Highlight widgets step by step.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/SimformSolutionsPvtLtd/flutter_showcaseview/pull/433', web: 'https://pub.dev/packages/showcaseview' }
    },
    {
      title: 'Youtube Player Flutter',
      description: 'Flutter plugin for playing or streaming inline YouTube videos using the official iFrame player API. This plugin supports both Android and iOS.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/sarbagyastha/youtube_player_flutter/pull/914', web: 'https://pub.dev/packages/youtube_player_flutter' }
    },
    {
      title: 'Network Inspector',
      description: 'Http inspector / logger for Dio and Http package. This package would allow you to log every Http request, response, and error from Dio & Http.',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/Meruya-Technology/network_inspector/pulls/chandrabezzo', web: 'https://pub.dev/packages/network_inspector' }
    },
    {
      title: 'Whatsapp Share',
      description: 'Simple way to share message, links or files from your flutter app to specific contact in whatsapp',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/ankushmishra2903-official/whatsapp_share2/pull/10', web: 'https://pub.dev/packages/whatsapp_share2' }
    },
    {
      title: 'Jitsi Meet',
      description: 'Jitsi Meet Plugin - A plugin for integrating open source Jitsi Meet API in flutter. Jitsi Meet is secure, fully featured and allows completely free video conferencing made with https://jitsi.org, a collection of open source projects',
      tags: ['Dart', 'Flutter'],
      links: { github: 'https://github.com/gunschu/jitsi_meet/pull/28', web: 'https://pub.dev/packages/jitsi_meet' }
    },
  ]

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
            view the archive
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
