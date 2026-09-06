import type { L10n } from '@/lib/i18n'

export interface Problem {
  title: L10n
  description: L10n
  /** Technologies stay attached to a problem, never a bare logo wall. */
  stack: string
}

export const problems: Problem[] = [
  {
    title: { en: 'Build a Mobile Product', id: 'Membangun Produk Mobile' },
    description: {
      en: 'From architecture and module boundaries through implementation, API integration, and the unglamorous work of getting a build actually release-ready.',
      id: 'Dari arsitektur dan batas modul sampai implementasi, integrasi API, dan pekerjaan tidak glamor untuk membuat build benar-benar siap rilis.',
    },
    stack: 'Flutter · Android · iOS · REST · GraphQL',
  },
  {
    title: { en: 'Modernize an Existing Application', id: 'Memodernisasi Aplikasi Lama' },
    description: {
      en: 'Codebases that grew faster than their structure. Modularization, dependency untangling, and paying down the technical debt that is actually slowing delivery — not all of it.',
      id: 'Basis kode yang tumbuh lebih cepat dari strukturnya. Modularisasi, mengurai dependensi, dan melunasi utang teknis yang benar-benar menghambat pengiriman — bukan semuanya.',
    },
    stack: 'Architecture · Modularization · Refactoring',
  },
  {
    title: { en: 'Integrate Native Capabilities', id: 'Integrasi Kemampuan Native' },
    description: {
      en: 'The work that starts where Dart ends: platform channels, Android and iOS SDKs, Kotlin and Swift implementations, and the lifecycle details that only surface in production.',
      id: 'Pekerjaan yang dimulai saat Dart berakhir: platform channel, SDK Android dan iOS, implementasi Kotlin dan Swift, serta detail lifecycle yang baru muncul di produksi.',
    },
    stack: 'Flutter · Kotlin · Swift · Platform Channels',
  },
  {
    title: { en: 'Build SDKs & Plugins', id: 'Membangun SDK & Plugin' },
    description: {
      en: 'Developer-facing libraries where the API is the product — designing a surface other engineers can use correctly without reading the source, then publishing and maintaining it.',
      id: 'Pustaka untuk sesama developer, di mana API adalah produknya — merancang antarmuka yang bisa dipakai engineer lain dengan benar tanpa membaca kode sumbernya, lalu memublikasikan dan merawatnya.',
    },
    stack: 'Dart · pub.dev · API Design · Versioning',
  },
  {
    title: { en: 'Solve Difficult Production Problems', id: 'Menyelesaikan Masalah Produksi yang Sulit' },
    description: {
      en: 'Crashes that only reproduce on one OS version, performance cliffs, lifecycle and state bugs, networking edge cases. Diagnosis first, then a fix at the root rather than the symptom.',
      id: 'Crash yang hanya muncul di satu versi OS, penurunan performa mendadak, bug lifecycle dan state, kasus tepi jaringan. Diagnosis dulu, lalu perbaikan di akar masalah, bukan gejalanya.',
    },
    stack: 'Profiling · Crash Analysis · State Management',
  },
  {
    title: { en: 'Improve Engineering Productivity', id: 'Meningkatkan Produktivitas Engineering' },
    description: {
      en: 'Tooling, automation, and CLI workflows that shorten the loop between writing code and knowing whether it works — including where AI agents genuinely help.',
      id: 'Tooling, otomasi, dan alur kerja CLI yang memperpendek jarak antara menulis kode dan mengetahui apakah kode itu bekerja — termasuk di mana agen AI benar-benar membantu.',
    },
    stack: 'CLI Tooling · CI/CD · Automation',
  },
]
