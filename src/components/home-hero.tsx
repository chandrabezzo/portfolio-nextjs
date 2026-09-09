import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { Container, Eyebrow, Portrait } from '@/components/ui/primitives'
import { langPath, t, ui, type Lang } from '@/lib/i18n'

export function HomeHero({ lang }: { lang: Lang }) {
  return (
    <section
      className='border-b border-line py-10 sm:py-14 lg:py-20'
      aria-label={t(ui.eyebrowAbout, lang)}
    >
      <Container>
        <div className='grid gap-x-16 gap-y-8 lg:grid-cols-[1.7fr_1fr]'>
          <div>
            <Eyebrow className='flex items-center gap-2 text-accent'>
              <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-accent' aria-hidden />
              {t(profile.role, lang)}
            </Eyebrow>
            <p className='mt-7 text-sm font-medium text-ink-muted'>{profile.name}</p>
            <h1 className='hero-title mt-3 font-display font-medium'>
              {t(profile.headline, lang)
                .split('. ')
                .map((line, index) => (
                  <span key={line} className={index ? 'block text-accent' : 'block'}>
                    {line}
                    {index === 0 ? '.' : ''}
                  </span>
                ))}
            </h1>
            <p className='mt-6 max-w-[54ch] text-base leading-relaxed text-ink-muted sm:text-lg'>
              {t(profile.intro, lang)}
            </p>
            <div className='mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <Button asChild size='lg'>
                <Link
                  href={langPath(lang, '/contact')}
                  className='plausible-event-name=contact_click'
                >
                  {t(ui.ctaDiscuss, lang)}
                  <ArrowUpRight className='h-4 w-4' aria-hidden />
                </Link>
              </Button>
              <a
                href='#selected-work'
                className='inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-medium hover:text-accent'
              >
                {t(ui.ctaExploreWork, lang)}
                <ArrowDown className='h-4 w-4' aria-hidden />
              </a>
            </div>
          </div>
          <dl className='proof-grid lg:col-start-1 lg:row-start-2 lg:grid-cols-4'>
            {profile.proof.map(item => (
              <div key={item.label.en}>
                <dt className='text-xs leading-relaxed text-ink-muted'>{t(item.label, lang)}</dt>
                <dd className='mt-2 font-sans text-lg font-semibold tracking-tight'>
                  {t(item.value, lang)}
                </dd>
              </div>
            ))}
          </dl>
          <figure className='w-full max-w-sm justify-self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-xs lg:justify-self-end lg:self-center'>
            <div className='relative rounded-xl border border-line bg-surface p-3 sm:p-4'>
              <Portrait
                alt={`${profile.name}, ${t(profile.role, lang)}`}
                className='aspect-[4/4.5]'
              />
              <div className='flex items-center justify-between gap-4 px-1 pb-1 pt-5'>
                <span className='font-display text-lg'>
                  {lang === 'id'
                    ? 'Pengalaman. Pertimbangan. Kepedulian.'
                    : 'Experience. Judgment. Care.'}
                </span>
              </div>
            </div>
            <figcaption className='mt-4 flex flex-wrap justify-between gap-2 text-xs text-ink-subtle'>
              <span>{lang === 'id' ? 'Berbasis di Indonesia' : 'Based in Indonesia'}</span>
              <span>Mobile · Native · Tooling</span>
            </figcaption>
          </figure>
        </div>
        <div className='mt-10 flex flex-col gap-5 rounded-lg border border-line bg-surface px-5 py-5 sm:mt-12 lg:flex-row lg:items-center lg:justify-between lg:px-7'>
          <p className='max-w-64 font-mono text-[0.65rem] leading-relaxed tracking-widest text-ink-subtle'>
            {lang === 'id'
              ? 'PENGALAMAN ENGINEERING & KOLABORASI'
              : 'ENGINEERING EXPERIENCE & COLLABORATIONS'}
          </p>
          <div className='flex flex-wrap gap-x-7 gap-y-3 font-sans text-base font-semibold tracking-tight text-ink-muted sm:gap-x-10'>
            <Link className='hover:text-accent' href={langPath(lang, '/about#experience')}>
              Evermos
            </Link>
            <Link className='hover:text-accent' href={langPath(lang, '/work#engagements')}>
              TechLab Security
            </Link>
            <Link className='hover:text-accent' href={langPath(lang, '/work#geoxspot')}>
              GeoXSpot
            </Link>
            <Link className='hover:text-accent' href={langPath(lang, '/work#engagements')}>
              Cloud Creatures
            </Link>
            <Link className='hover:text-accent' href={langPath(lang, '/work#engagements')}>
              LDP
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
