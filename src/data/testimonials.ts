import type { L10n } from '@/lib/i18n'

export interface Testimonial {
  quote: L10n
  author: string
  title: L10n
  /**
   * TRUE = not a real recommendation. Placeholders exist only so the section
   * design can be reviewed. Attribution is deliberately fictional — a site whose
   * whole argument is verifiable proof must not put invented words in a real
   * person's mouth. Replace with real LinkedIn recommendations before merging.
   */
  placeholder?: boolean
}

// TODO(chandra): replace all three with real recommendations, then delete the
// `placeholder` flags. Do not merge to main with placeholders present.
export const testimonials: Testimonial[] = [
  {
    quote: {
      en: 'Placeholder text. Replace with a real recommendation that speaks to technical leadership — how architectural decisions were made and why the team trusted them.',
      id: 'Teks sementara. Ganti dengan rekomendasi asli tentang kepemimpinan teknis — bagaimana keputusan arsitektur diambil dan mengapa tim memercayainya.',
    },
    author: 'Placeholder Name',
    title: {
      en: 'Engineering Manager — replace with real attribution',
      id: 'Engineering Manager — ganti dengan atribusi asli',
    },
    placeholder: true,
  },
  {
    quote: {
      en: 'Placeholder text. Replace with a real recommendation about problem solving — a specific production problem that was diagnosed and fixed at the root.',
      id: 'Teks sementara. Ganti dengan rekomendasi asli tentang pemecahan masalah — satu masalah produksi spesifik yang didiagnosis dan diperbaiki sampai ke akarnya.',
    },
    author: 'Placeholder Name',
    title: {
      en: 'Product Owner — replace with real attribution',
      id: 'Product Owner — ganti dengan atribusi asli',
    },
    placeholder: true,
  },
  {
    quote: {
      en: 'Placeholder text. Replace with a real recommendation about mentorship and delivery — the effect on other engineers, not just on the codebase.',
      id: 'Teks sementara. Ganti dengan rekomendasi asli tentang mentoring dan pengiriman — dampaknya pada engineer lain, bukan hanya pada basis kode.',
    },
    author: 'Placeholder Name',
    title: {
      en: 'Senior Engineer — replace with real attribution',
      id: 'Senior Engineer — ganti dengan atribusi asli',
    },
    placeholder: true,
  },
]

const placeholderCount = testimonials.filter((t) => t.placeholder).length
if (placeholderCount > 0) {
  console.warn(
    `\n  ⚠  ${placeholderCount} placeholder testimonial(s) in src/data/testimonials.ts.` +
      `\n     Replace with real recommendations before merging to main.\n`,
  )
}
