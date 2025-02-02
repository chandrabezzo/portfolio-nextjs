import { ReactNode } from 'react'
import { Navigation } from './navigation'
import { SocialSidebar } from './social-sidebar'
import { EmailSidebar } from './email-sidebar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      <Navigation />
      <div className="flex">
        <SocialSidebar />
        <main className="flex-1 px-6 md:px-12 lg:px-24">
          {children}
        </main>
        <EmailSidebar />
      </div>
    </div>
  )
}
