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
      en: 'Understand the system as it actually is — not as the documentation describes it. Read the code, trace the real flow, reproduce the problem.',
      id: 'Memahami sistem apa adanya — bukan seperti yang ditulis dokumentasi. Membaca kode, menelusuri alur sebenarnya, mereproduksi masalahnya.',
    },
  },
  {
    step: '02',
    title: { en: 'Design', id: 'Desain' },
    description: {
      en: 'Decide what to build and, more importantly, what not to. Name the trade-offs explicitly so they can be argued with.',
      id: 'Memutuskan apa yang dibangun dan, yang lebih penting, apa yang tidak. Menyebut trade-off secara eksplisit supaya bisa diperdebatkan.',
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
      en: 'Prove it works, and prove it keeps working. Coverage where it earns its keep, not everywhere.',
      id: 'Membuktikan kode bekerja, dan tetap bekerja. Cakupan pengujian di tempat yang sepadan, bukan di mana-mana.',
    },
  },
  {
    step: '05',
    title: { en: 'Review', id: 'Tinjauan' },
    description: {
      en: 'Adversarial reading of the diff — mine or an agent’s. Accountability for correctness does not transfer to a tool.',
      id: 'Membaca diff secara kritis — milik saya maupun milik agen AI. Tanggung jawab atas kebenaran kode tidak berpindah ke alat.',
    },
  },
  {
    step: '06',
    title: { en: 'Ship', id: 'Rilis' },
    description: {
      en: 'Release readiness, rollout, and knowing what signal says it went wrong.',
      id: 'Kesiapan rilis, peluncuran, dan tahu sinyal apa yang menandakan ada yang salah.',
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
