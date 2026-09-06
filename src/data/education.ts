import type { L10n } from '@/lib/i18n'

export interface Education {
  institution: string
  degree: L10n
  field: L10n
  period: string
  note?: L10n
}

/**
 * Source: public LinkedIn profile (id.linkedin.com/in/chandra-abdul-fattah),
 * confirmed by Chandra as the authoritative record.
 *
 * The previous site's JSON-LD claimed "Universitas Nasional PASIM". That was
 * wrong and should not be reinstated — this list is the correct one.
 */
export const education: Education[] = [
  {
    institution: 'Universitas Widyatama',
    degree: { en: "Bachelor's degree", id: 'Sarjana (S1)' },
    field: { en: 'Information Technology', id: 'Teknologi Informasi' },
    period: '2018 — 2020',
    note: { en: 'GPA 3.75 / 4.00 · Focus on interfacing and IoT', id: 'IPK 3,75 / 4,00 · Fokus interfacing dan IoT' },
  },
  {
    institution: 'Politeknik Negeri Bandung',
    degree: { en: "Engineer's degree", id: 'Diploma IV (Sarjana Terapan)' },
    field: { en: 'Information Technology', id: 'Teknologi Informasi' },
    period: '2014 — 2017',
    note: { en: 'GPA 3.57 / 4.00 · Best Graduate Award, October 2017', id: 'IPK 3,57 / 4,00 · Lulusan Terbaik, Oktober 2017' },
  },
  {
    institution: 'SMK Negeri 2 Sumedang',
    degree: { en: 'Vocational high school', id: 'SMK' },
    field: { en: 'Computer Software Engineering', id: 'Rekayasa Perangkat Lunak' },
    period: '2011 — 2014',
  },
]

export interface Certification {
  name: string
  issuer: string
  date: string
}

export const certifications: Certification[] = [
  { name: 'Kotlin Android Developer Expert', issuer: 'Dicoding', date: 'February 2020' },
  { name: 'Flutter Intermediate', issuer: 'Udemy', date: 'February 2020' },
  { name: 'Digitalent Android OA', issuer: 'Digitalent', date: 'November 2019' },
  { name: 'Flutter Beginners', issuer: 'Udemy', date: 'November 2019' },
]
