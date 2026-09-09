import type { L10n } from '@/lib/i18n'

export interface Expertise {
  slug: string
  title: L10n
  summary: L10n
  detail: L10n
  stack: string[]
  evidence?: { label: L10n; href: string }[]
}

// Evidence reviewed 2026-09-07: public GitHub repositories and
// https://pub.dev/publishers/solusibejo.com/packages (23 packages across 3 pages).
export const expertise: Expertise[] = [
  {
    slug: 'mobile-engineering',
    evidence: [
      {
        label: { en: 'Evermos mobile engineering', id: 'Rekayasa mobile Evermos' },
        href: '/work/evermos-mobile-engineering',
      },
    ],
    title: { en: 'Mobile Engineering', id: 'Rekayasa Mobile' },
    summary: {
      en: 'Shipping and maintaining mobile products that stay maintainable under continuous change.',
      id: 'Merilis dan merawat produk mobile yang tetap mudah dirawat di tengah perubahan terus-menerus.',
    },
    detail: {
      en: 'Mobile engineering since 2017 across native Android, React Native, and Flutter — in healthcare information systems, commerce, and consumer products. The recurring problem is rarely the first release; it is what the codebase looks like after twenty of them.',
      id: 'Rekayasa mobile sejak 2017 di Android native, React Native, dan Flutter — pada sistem informasi kesehatan, commerce, dan produk konsumen. Masalah yang berulang jarang soal rilis pertama; yang jadi masalah adalah wujud basis kode setelah rilis kedua puluh.',
    },
    stack: ['Flutter', 'Android', 'iOS', 'Kotlin', 'Swift'],
  },
  {
    slug: 'flutter-engineering',
    evidence: [
      {
        label: { en: 'Published Flutter packages', id: 'Paket Flutter terpublikasi' },
        href: 'https://pub.dev/publishers/solusibejo.com/packages',
      },
    ],
    title: { en: 'Flutter Engineering', id: 'Rekayasa Flutter' },
    summary: {
      en: 'Application architecture, state management, and performance in production Flutter apps.',
      id: 'Arsitektur aplikasi, manajemen state, dan performa pada aplikasi Flutter di produksi.',
    },
    detail: {
      en: 'Working with Flutter since around 2019, across apps built from scratch and apps inherited mid-flight. Most of the value is in module boundaries and state discipline — decisions that are cheap early and expensive later.',
      id: 'Menggunakan Flutter sejak sekitar 2019, baik pada aplikasi yang dibangun dari nol maupun yang diwarisi di tengah jalan. Nilai terbesarnya ada pada batas modul dan disiplin state — keputusan yang murah di awal dan mahal di kemudian hari.',
    },
    stack: ['Dart', 'Flutter', 'State Management', 'Performance'],
  },
  {
    slug: 'native-integration',
    evidence: [
      {
        label: { en: 'Screen Time case study', id: 'Studi kasus Screen Time' },
        href: '/work/screen-time-native-integration',
      },
    ],
    title: { en: 'Native Android & iOS Integration', id: 'Integrasi Native Android & iOS' },
    summary: {
      en: 'The boundary between Dart and the platform, where cross-platform stops being free.',
      id: 'Batas antara Dart dan platform, tempat cross-platform berhenti menjadi gratis.',
    },
    detail: {
      en: 'Platform channels, native SDK wrapping, permissions, lifecycle, and background behaviour. Capabilities like screen time monitoring, screenshot detection, and alternate app icons have no Dart equivalent — they have to be implemented twice and reconciled once.',
      id: 'Platform channel, pembungkusan SDK native, izin, lifecycle, dan perilaku background. Kemampuan seperti pemantauan screen time, deteksi tangkapan layar, dan ikon aplikasi alternatif tidak punya padanan di Dart — harus diimplementasikan dua kali dan disatukan sekali.',
    },
    stack: ['Platform Channels', 'Kotlin', 'Swift', 'Android APIs', 'iOS APIs'],
  },
  {
    slug: 'sdk-plugin-engineering',
    evidence: [
      {
        label: { en: 'GrowthBook Flutter SDK', id: 'GrowthBook Flutter SDK' },
        href: 'https://github.com/growthbook/growthbook-flutter',
      },
      {
        label: { en: 'Package publisher', id: 'Publisher paket' },
        href: 'https://pub.dev/publishers/solusibejo.com/packages',
      },
    ],
    title: { en: 'SDK & Plugin Engineering', id: 'Rekayasa SDK & Plugin' },
    summary: {
      en: 'Libraries where other engineers are the users, and the API surface is the product.',
      id: 'Pustaka yang penggunanya adalah engineer lain, dan permukaan API-nya adalah produknya.',
    },
    detail: {
      en: '23 packages under the verified solusibejo.com publisher on pub.dev, alongside contributions to other Flutter projects. Designing for a caller you will never meet means being deliberate about naming, defaults, error surfaces, and what you refuse to expose.',
      id: '23 paket di publisher terverifikasi solusibejo.com di pub.dev, disertai kontribusi pada proyek Flutter lain. Merancang untuk pemanggil yang tak akan pernah kita temui berarti berhati-hati soal penamaan, nilai bawaan, bentuk error, dan apa yang sengaja tidak diekspos.',
    },
    stack: ['Dart', 'pub.dev', 'API Design', 'Semantic Versioning'],
  },
  {
    slug: 'architecture-modernization',
    evidence: [
      {
        label: { en: 'Engineering decisions at Evermos', id: 'Keputusan engineering di Evermos' },
        href: '/work/evermos-mobile-engineering',
      },
    ],
    title: { en: 'Architecture & Modernization', id: 'Arsitektur & Modernisasi' },
    summary: {
      en: 'Restructuring systems that outgrew their original design.',
      id: 'Menata ulang sistem yang sudah melampaui rancangan awalnya.',
    },
    detail: {
      en: 'Setting architecture on greenfield projects, and untangling it on projects that never had one. The goal is not architectural purity — it is shortening the distance between a product decision and a shipped change.',
      id: 'Menetapkan arsitektur pada proyek baru, dan mengurainya pada proyek yang tidak pernah punya arsitektur. Tujuannya bukan kemurnian arsitektur — melainkan memperpendek jarak antara keputusan produk dan perubahan yang dirilis.',
    },
    stack: ['Modularization', 'Clean Architecture', 'Refactoring'],
  },
  {
    slug: 'developer-tooling',
    evidence: [
      {
        label: { en: 'Tooling case study', id: 'Studi kasus developer tooling' },
        href: '/work/developer-tooling-flutter',
      },
      {
        label: { en: 'Package Rename Plus', id: 'Package Rename Plus' },
        href: 'https://pub.dev/packages/package_rename_plus',
      },
    ],
    title: { en: 'Developer Tooling', id: 'Developer Tooling' },
    summary: {
      en: 'Tools that shorten the feedback loop for a whole team, not just one engineer.',
      id: 'Alat yang memperpendek umpan balik untuk satu tim, bukan hanya satu engineer.',
    },
    detail: {
      en: 'CLI utilities, in-app debugging overlays, and release automation. Tools like Package Rename Plus and Analytics Debugger exist because a repeated manual step was quietly costing the team more than it appeared to.',
      id: 'Utilitas CLI, overlay debugging di dalam aplikasi, dan otomasi rilis. Alat seperti Package Rename Plus dan Analytics Debugger lahir karena satu langkah manual yang berulang diam-diam memakan biaya tim lebih besar dari yang terlihat.',
    },
    stack: ['CLI', 'CI/CD', 'Automation', 'Jenkins'],
  },
  {
    slug: 'technical-consulting',
    evidence: [
      {
        label: { en: 'Experience and engagements', id: 'Pengalaman dan keterlibatan' },
        href: '/about',
      },
    ],
    title: { en: 'Technical Consulting', id: 'Konsultasi Teknis' },
    summary: {
      en: 'Architecture review, technical direction, and second opinions on hard decisions.',
      id: 'Tinjauan arsitektur, arah teknis, dan pendapat kedua untuk keputusan yang sulit.',
    },
    detail: {
      en: 'Working with teams on the decisions that are expensive to reverse: platform choice, architecture, hiring bar, and how to sequence a modernization without stopping delivery.',
      id: 'Bekerja bersama tim pada keputusan yang mahal untuk dibatalkan: pilihan platform, arsitektur, standar perekrutan, dan cara mengurutkan modernisasi tanpa menghentikan pengiriman.',
    },
    stack: ['Architecture Review', 'Technical Direction', 'Mentorship'],
  },
  {
    slug: 'ai-augmented-engineering',
    title: { en: 'AI-Augmented Engineering', id: 'Rekayasa Berbantu AI' },
    summary: {
      en: 'Using AI agents across the engineering loop without outsourcing engineering judgment.',
      id: 'Memakai agen AI di sepanjang alur rekayasa tanpa mengalihkan pertimbangan teknis.',
    },
    detail: {
      en: 'I use AI coding agents for research, implementation, debugging, tests, review, and documentation. Architecture, trade-offs, and release decisions remain my responsibility, supported by source inspection and verification.',
      id: 'Saya memakai agen AI untuk riset, implementasi, debugging, tes, review, dan dokumentasi. Arsitektur, trade-off, dan keputusan rilis tetap menjadi tanggung jawab saya, dengan pemeriksaan sumber dan verifikasi hasil.',
    },
    stack: ['AI Agents', 'Code Review', 'Automation', 'Documentation'],
  },
]
