import Script from 'next/script'
import { personSchema } from '@/app/schema'

export function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }}
    />
  )
}
