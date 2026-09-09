import type { L10n } from '@/lib/i18n'

export interface Testimonial {
  summary: L10n
  author: string
  context: L10n
  date: string
  authorUrl: string
}

export const recommendationsUrl =
  'https://www.linkedin.com/in/chandra-abdul-fattah/details/recommendations/'

// Received recommendations read on LinkedIn, 2026-09-09. Editorial summaries,
// not quotations or company endorsements. Sources: docs/seo-content-review.md.
export const testimonials: Testimonial[] = [
  {
    author: 'Cevin Ways Al Cornelis',
    context: { en: 'Mobile engineering colleague at Evermos', id: 'Rekan tim mobile di Evermos' },
    date: '2024-12-28',
    authorUrl: 'https://www.linkedin.com/in/cevin-ways-al-cornelis/',
    summary: {
      en: 'Cevin highlights Chandra’s problem-solving ability and the confidence he brought to tackling challenges together on the mobile team.',
      id: 'Cevin menyoroti kemampuan Chandra memecahkan masalah dan rasa percaya diri tim saat menghadapi tantangan mobile bersama.',
    },
  },
  {
    author: 'Dwi Kurnianto Mulyadien',
    context: { en: 'Engineering colleague at Evermos', id: 'Rekan engineer di Evermos' },
    date: '2022-01-03',
    authorUrl: 'https://www.linkedin.com/in/dwi-kurnianto-mulyadien-19b421121/',
    summary: {
      en: 'Dwi credits Chandra’s early Flutter architecture and modularization work at Evermos, and describes how their collaboration helped him grow as an engineer.',
      id: 'Dwi mengapresiasi kontribusi awal Chandra pada arsitektur dan modularisasi Flutter di Evermos, serta peran kolaborasi mereka dalam perkembangan kemampuan engineering-nya.',
    },
  },
  {
    author: 'Syamsu Rizal Ali',
    context: { en: 'Former direct manager', id: 'Pernah menjadi atasan langsung' },
    date: '2022-04-21',
    authorUrl: 'https://www.linkedin.com/in/syamsu-rizal-ali-a0019259/',
    summary: {
      en: 'Syamsu recognizes Chandra’s discipline, ability to learn quickly, time management, prioritization, and leadership potential.',
      id: 'Syamsu mengapresiasi kedisiplinan Chandra, kemampuan belajar cepat, pengelolaan waktu, penentuan prioritas, dan potensi kepemimpinannya.',
    },
  },
]
