import type { L10n } from '@/lib/i18n'

export interface ApproachStep {
  step: string
  title: L10n
  description: L10n
}

export const approach: ApproachStep[] = [
  {
    step: '01',
    title: { en: 'Explore', id: 'Eksplorasi' },
    description: {
      en: 'Understand the product and its constraints. Read the code and documentation, trace the flow, and reproduce the problem.',
      id: 'Memahami produk dan batasannya. Membaca kode dan dokumentasi, menelusuri alur, serta mereproduksi masalah.',
    },
  },
  {
    step: '02',
    title: { en: 'Design', id: 'Desain' },
    description: {
      en: 'Agree on scope, compare technical options, and document the trade-offs behind the chosen approach.',
      id: 'Menyepakati lingkup pekerjaan, membandingkan opsi teknis, dan mendokumentasikan pertimbangan di balik pendekatan yang dipilih.',
    },
  },
  {
    step: '03',
    title: { en: 'Implement', id: 'Implementasi' },
    description: {
      en: 'Write the smallest change that solves the real problem, in the style of the code around it.',
      id: 'Menulis perubahan terkecil yang menyelesaikan masalah sebenarnya, mengikuti gaya kode di sekitarnya.',
    },
  },
  {
    step: '04',
    title: { en: 'Test', id: 'Pengujian' },
    description: {
      en: 'Verify critical behavior and failure cases with tests that catch regressions and support safe releases.',
      id: 'Memverifikasi perilaku utama dan skenario kegagalan dengan pengujian untuk mendeteksi regresi dan mendukung rilis yang aman.',
    },
  },
  {
    step: '05',
    title: { en: 'Review', id: 'Tinjauan' },
    description: {
      en: 'Review correctness, maintainability, and risk. I remain responsible for the work, including changes assisted by AI.',
      id: 'Meninjau ketepatan, kemudahan perawatan, dan risiko. Saya tetap bertanggung jawab atas hasil pekerjaan, termasuk perubahan berbantu AI.',
    },
  },
  {
    step: '06',
    title: { en: 'Ship', id: 'Rilis' },
    description: {
      en: 'Prepare the release, rollout, monitoring, and recovery steps with the team.',
      id: 'Menyiapkan rilis, peluncuran, pemantauan, dan langkah pemulihan bersama tim.',
    },
  },
  {
    step: '07',
    title: { en: 'Learn', id: 'Belajar' },
    description: {
      en: 'Feed what the production system taught back into the architecture and the tooling.',
      id: 'Mengembalikan pelajaran dari sistem produksi ke dalam arsitektur dan tooling.',
    },
  },
]
