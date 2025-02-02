import { ReactNode } from 'react'
import './globals.css'
import { metadata } from './metadata'
import { Layout as ComponentLayout } from '@/components/layout'
import { StructuredData } from '@/components/structured-data'

export { metadata }

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background">
        <div className="relative flex min-h-screen flex-col">
          <ComponentLayout>{children}</ComponentLayout>
        </div>
      </body>
    </html>
  )
}
