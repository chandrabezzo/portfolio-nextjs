import type { L10n } from '@/lib/i18n'

export interface Expertise {
  slug: string
  title: L10n
  summary: L10n
  detail: L10n
  stack: string[]
}

export const expertise: Expertise[] = [
  {
    slug: 'mobile-engineering',
    title: { en: 'Mobile Engineering', id: 'Rekayasa Mobile' },
    summary: {
      en: 'Shipping and maintaining mobile products that stay maintainable under continuous change.',
      id: 'Merilis dan merawat produk mobile yang tetap mudah dirawat di tengah perubahan terus-menerus.',
    },
    detail: {
      en: 'A decade of mobile work across native Android, React Native, and Flutter — in healthcare information systems, commerce, and consumer products. The recurring problem is rarely the first release; it is what the codebase looks like after twenty of them.',
      id: 'Satu dekade pekerjaan mobile di Android native, React Native, dan Flutter — pada sistem informasi kesehatan, commerce, dan produk konsumen. Masalah yang berulang jarang soal rilis pertama; yang jadi masalah adalah wujud basis kode setelah rilis kedua puluh.',
    },
    stack: ['Flutter', 'Android', 'iOS', 'Kotlin', 'Swift'],
  },
  {
    slug: 'flutter-engineering',
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
    title: { en: 'SDK & Plugin Engineering', id: 'Rekayasa SDK & Plugin' },
    summary: {
      en: 'Libraries where other engineers are the users, and the API surface is the product.',
      id: 'Pustaka yang penggunanya adalah engineer lain, dan permukaan API-nya adalah produknya.',
    },
    detail: {
      en: 'Over twenty published packages and upstream contributions on pub.dev. Designing for a caller you will never meet means being deliberate about naming, defaults, error surfaces, and what you refuse to expose.',
      id: 'Lebih dari dua puluh paket terpublikasi dan kontribusi upstream di pub.dev. Merancang untuk pemanggil yang tak akan pernah kita temui berarti berhati-hati soal penamaan, nilai bawaan, bentuk error, dan apa yang sengaja tidak diekspos.',
    },
    stack: ['Dart', 'pub.dev', 'API Design', 'Semantic Versioning'],
  },
  {
    slug: 'architecture-modernization',
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
      en: 'AI coding agents are genuinely useful for research, implementation, debugging, test writing, review, and documentation. They are not accountable for architecture, trade-offs, or correctness — that remains the engineer’s job, and treating it otherwise is how teams ship confident nonsense.',
      id: 'Agen AI benar-benar berguna untuk riset, implementasi, debugging, menulis tes, tinjauan, dan dokumentasi. Tapi mereka tidak bertanggung jawab atas arsitektur, trade-off, atau kebenaran kode — itu tetap tugas engineer, dan menganggap sebaliknya adalah cara tim merilis omong kosong yang terdengar meyakinkan.',
    },
    stack: ['AI Agents', 'Code Review', 'Automation', 'Documentation'],
  },
]
