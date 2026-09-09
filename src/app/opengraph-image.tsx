import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${profile.name} — ${profile.role.en}`

/** Rendered to a static PNG at build time, so this works under output: 'export'. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f8f7f3',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#56625d',
            fontFamily: 'monospace',
          }}
        >
          {profile.role.en}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 78, color: '#202c29', lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#216452', marginTop: 20 }}>
            {profile.headline.en}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            borderTop: '2px solid #bdc7bb',
            paddingTop: 28,
            fontSize: 24,
            color: '#56625d',
            fontFamily: 'monospace',
          }}
        >
          Flutter · Android · iOS · SDKs · Architecture
        </div>
      </div>
    ),
    size
  )
}
