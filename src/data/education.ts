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
    note: {
      en: 'GPA 3.75 / 4.00 · Focus on interfacing and IoT',
      id: 'IPK 3,75 / 4,00 · Fokus interfacing dan IoT',
    },
  },
  {
    institution: 'Politeknik Negeri Bandung',
    // Preserve the source wording; LinkedIn does not specify D3 or D4.
    degree: { en: "Engineer's Degree", id: "Engineer's Degree" },
    field: { en: 'Information Technology', id: 'Teknologi Informasi' },
    period: '2014 — 2017',
    note: { en: 'GPA 3.57 / 4.00', id: 'IPK 3,57 / 4,00' },
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
  issued: string
  expired?: string
  url: string
}

export const credentialsSource =
  'https://www.linkedin.com/in/chandra-abdul-fattah/details/certifications/'
export const honorsSource = 'https://www.linkedin.com/in/chandra-abdul-fattah/details/honors/'

// Selected records verified on LinkedIn, 2026-09-09. Historical credentials
// retain their expiry dates; they are not presented as current qualifications.
export const certifications: Certification[] = [
  {
    name: 'Fullstack Developer with Flutter 3.0',
    issuer: 'Edspert.id',
    issued: '2022-08',
    url: 'https://drive.google.com/file/d/1etOcC3GKEkTrYM_wFOUlc4_K56TL1E5W/view',
  },
  {
    name: 'Memulai Pemrograman Dengan Dart',
    issuer: 'Dicoding Indonesia',
    issued: '2022-05',
    expired: '2025-05',
    url: 'https://www.dicoding.com/certificates/L4PQ44737XO1',
  },
  {
    name: 'Belajar Fundamental Aplikasi Flutter',
    issuer: 'Dicoding Indonesia',
    issued: '2021-09',
    expired: '2024-09',
    url: 'https://www.dicoding.com/certificates/MEPJL9VD6Z3V',
  },
  {
    name: 'Associate Android Developer',
    issuer: 'Google for Developers',
    issued: '2019-12',
    expired: '2022-12',
    url: 'https://www.credential.net/191f18bd-c590-4128-9513-018759b8bad0',
  },
]

export const recognition: {
  title: L10n
  issuer: string
  date: string
  description: L10n
  url: string
}[] = [
  {
    title: { en: 'Flutter bootcamp mentor', id: 'Mentor bootcamp Flutter' },
    issuer: 'Edspert.id',
    date: '2022-11',
    url: honorsSource,
    description: {
      en: 'Mentored participants in the four-week Mobile Development Intensive Bootcamp with Flutter, Batch 7, in October 2022.',
      id: 'Membimbing peserta Mobile Development Intensive Bootcamp with Flutter Batch 7 selama empat minggu pada Oktober 2022.',
    },
  },
  {
    title: {
      en: 'Speaker · Work Smarter With Flutter',
      id: 'Pembicara · Work Smarter With Flutter',
    },
    issuer: 'Docotel Group',
    date: '2019-09',
    url: honorsSource,
    description: {
      en: 'Presented at DocoSpeech #1, sharing Flutter development experience.',
      id: 'Berbagi pengalaman pengembangan Flutter sebagai pembicara di DocoSpeech #1.',
    },
  },
]
