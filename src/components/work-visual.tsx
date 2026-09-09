import { ArrowDown, ArrowRight, Layers3, Smartphone, Terminal, Code2 } from 'lucide-react'
import type { Lang } from '@/lib/i18n'

/** Conceptual diagrams of published work, not product screenshots or internal architecture. */
export function WorkVisual({ slug, lang }: { slug: string; lang: Lang }) {
  const native = slug === 'screen-time-native-integration'
  const tooling = slug === 'developer-tooling-flutter'
  const Icon = native ? Smartphone : tooling ? Terminal : Layers3
  const label = native ? 'Dart ↔ Native' : tooling ? 'Developer experience' : 'Mobile engineering'
  return (
    <div
      className='work-visual'
      aria-label={lang === 'id' ? `Diagram konsep: ${label}` : `Concept diagram: ${label}`}
    >
      <div className='flex items-center justify-between gap-3 text-accent'>
        <span className='font-mono text-[0.65rem] uppercase tracking-widest'>{label}</span>
        <Icon className='h-5 w-5' aria-hidden />
      </div>
      <div className='my-8'>
        {native ? (
          <>
            <div className='diagram-node mx-auto flex w-3/4 items-center justify-center gap-2 border-accent py-4'>
              <Code2 className='h-4 w-4 text-accent' aria-hidden />
              Flutter API
            </div>
            <ArrowDown className='mx-auto my-2 h-4 w-4 text-accent' aria-hidden />
            <div className='grid grid-cols-2 gap-3'>
              <div className='diagram-node'>
                Android
                <span className='mt-1 block font-mono text-[0.6rem] text-ink-subtle'>
                  UsageStats
                </span>
              </div>
              <div className='diagram-node'>
                iOS
                <span className='mt-1 block font-mono text-[0.6rem] text-ink-subtle'>
                  Permissions
                </span>
              </div>
            </div>
          </>
        ) : tooling ? (
          <div className='on-deep overflow-hidden rounded-lg border border-deep-line bg-deep font-mono text-xs leading-loose text-deep-ink'>
            <div className='flex gap-1.5 border-b border-deep-line px-4 py-3' aria-hidden>
              {[0, 1, 2].map(dot => (
                <span key={dot} className='h-1.5 w-1.5 rounded-full bg-deep-muted' />
              ))}
            </div>
            <div className='space-y-3 p-4'>
              <p className='break-words text-deep-accent'>$ dart run package_rename_plus</p>
              <p className='text-deep-muted'>
                {lang === 'id' ? 'Konfigurasi → build → rilis' : 'Configure → build → release'}
              </p>
              <p className='border-t border-deep-line pt-3 text-deep-muted'>
                Android · iOS · Web · Desktop
              </p>
            </div>
          </div>
        ) : (
          <div className='space-y-3'>
            <div className='diagram-node flex items-center justify-center gap-3 border-accent py-5 font-sans text-lg font-semibold'>
              <Layers3 className='h-5 w-5 text-accent' aria-hidden />
              Evermos
            </div>
            <div className='flex items-center gap-2'>
              <div className='diagram-node flex-1'>Flutter</div>
              <ArrowRight className='h-4 w-4 text-accent' aria-hidden />
              <div className='diagram-node flex-1'>Android / iOS</div>
            </div>
            <p className='text-center text-xs text-ink-muted'>
              {lang === 'id'
                ? 'Arsitektur · kualitas · arah teknis'
                : 'Architecture · quality · technical direction'}
            </p>
          </div>
        )}
      </div>
      <span className='font-mono text-[0.6rem] uppercase tracking-widest text-ink-subtle'>
        {lang === 'id'
          ? 'Catatan engineering / diagram konsep'
          : 'Engineering notes / concept diagram'}
      </span>
    </div>
  )
}
