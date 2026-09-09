import { ImageResponse } from 'next/og'
import { getAllWork } from '@/lib/content'
import { LANGS, type Lang } from '@/lib/i18n'
import { profile } from '@/data/profile'

export const dynamic = 'force-static'
export const dynamicParams = false

function cards() {
  return LANGS.flatMap(lang =>
    getAllWork(lang).map(doc => ({
      image: `${lang}-${doc.slug}.png`,
      lang,
      doc,
    }))
  )
}

export function generateStaticParams() {
  return cards().map(({ image }) => ({ image }))
}

/** PNGs are generated during static export; no image server is needed in production. */
export async function GET(_request: Request, { params }: { params: Promise<{ image: string }> }) {
  const { image } = await params
  const card = cards().find(item => item.image === image)
  if (!card) return new Response(null, { status: 404 })
  const { frontmatter: fm } = card.doc
  const labels: Record<Lang, string> = { en: 'Selected work', id: 'Portofolio pilihan' }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: '#f8f7f3',
          color: '#202c29',
          padding: 64,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #bdc7bb',
            paddingBottom: 24,
          }}
        >
          <span style={{ fontSize: 24, fontWeight: 700 }}>{profile.name}</span>
          <span style={{ fontSize: 20, color: '#216452' }}>solusibejo.com</span>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '77%' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                color: '#216452',
                textTransform: 'uppercase',
                letterSpacing: 3,
              }}
            >
              {labels[card.lang]}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 56,
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: -2,
                marginTop: 20,
              }}
            >
              {fm.title}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 160,
              height: 160,
              border: '1px solid #bdc7bb',
              borderRadius: 16,
              background: '#e8eee8',
              color: '#216452',
              fontSize: 64,
            }}
          >
            {'</>'}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 32,
            borderTop: '1px solid #bdc7bb',
            paddingTop: 24,
            fontSize: 18,
            color: '#56625d',
          }}
        >
          <span>{fm.company}</span>
          <span>{fm.technologies.slice(0, 4).join(' · ')}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
