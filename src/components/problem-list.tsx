import { Plus } from 'lucide-react'
import { problems } from '@/data/problems'
import { t, type Lang } from '@/lib/i18n'

/** Native disclosures keep the service overview compact and usable without JS. */
export function ProblemList({ lang }: { lang: Lang }) {
  return (
    <div className='divide-y divide-line border-y border-line'>
      {problems.map((problem, index) => (
        <details key={problem.title.en} className='group' open={index === 0}>
          <summary className='flex min-h-16 cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden'>
            <span className='font-mono text-xs text-accent' aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className='flex-1 font-sans text-base font-medium sm:text-lg'>
              {t(problem.title, lang)}
            </h3>
            <Plus
              className='h-4 w-4 shrink-0 text-ink-subtle transition-transform group-open:rotate-45'
              aria-hidden
            />
          </summary>
          <div className='pb-6 pl-8'>
            <p className='leading-relaxed text-ink-muted'>{t(problem.description, lang)}</p>
            <p className='mt-4 font-mono text-xs leading-relaxed text-ink-subtle'>
              {problem.stack}
            </p>
          </div>
        </details>
      ))}
    </div>
  )
}
