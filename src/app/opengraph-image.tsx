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
          background: '#0f1113',
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
            color: '#7d786f',
            fontFamily: 'monospace',
          }}
        >
          {profile.role.en}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 78, color: '#f2f0ec', lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#6cc3ae', marginTop: 20 }}>
            {profile.headline.en}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            borderTop: '2px solid #262b30',
            paddingTop: 28,
            fontSize: 24,
            color: '#a8a49c',
            fontFamily: 'monospace',
          }}
        >
          Flutter · Android · iOS · SDKs · Architecture
        </div>
      </div>
    ),
    size,
  )
}
