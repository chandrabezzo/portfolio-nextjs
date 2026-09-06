import type { L10n } from '@/lib/i18n'

export interface ProjectLinks {
  github?: string
  website?: string
  playStore?: string
  appStore?: string
  pubDev?: string
}

export interface Project {
  slug: string
  title: string
  summary: L10n
  type: 'product' | 'open-source' | 'consulting' | 'tooling'
  technologies: string[]
  featured: boolean
  year?: number
  role?: L10n
  company?: string
  status?: 'live' | 'discontinued' | 'unknown'
  links?: ProjectLinks
}

export const projects: Project[] = [
  {
    slug: 'evermos',
    title: 'Evermos',
    summary: {
      en: 'A sharia-based reseller ecosystem connecting curated local products with a nationwide reseller network. Cross-platform Flutter delivery on Android and iOS, backed by an architecture built to survive continuous feature growth.',
      id: 'Ekosistem reseller berbasis syariah yang menghubungkan produk lokal terkurasi dengan jaringan reseller nasional. Dikerjakan lintas platform dengan Flutter di Android dan iOS, ditopang arsitektur yang dirancang bertahan terhadap pertumbuhan fitur terus-menerus.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android', 'iOS', 'Architecture'],
    featured: true,
    year: 2021,
    role: { en: 'Staff Engineer, Mobile', id: 'Staff Engineer, Mobile' },
    company: 'Evermos',
    status: 'live',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=evermos.evermos.com.evermos',
      appStore: 'https://apps.apple.com/id/app/evermos-reseller-dropship/id1601568866',
      website: 'https://evermos.com',
    },
  },
  {
    slug: 'klik-dokter',
    title: 'Klik Dokter',
    summary: {
      en: 'Integrated healthcare services in a consumer application — consultation, articles, and health tooling. Native Android engineering in Kotlin.',
      id: 'Layanan kesehatan terintegrasi dalam aplikasi konsumen — konsultasi, artikel, dan perkakas kesehatan. Dikerjakan sebagai Android native dengan Kotlin.',
    },
    type: 'product',
    technologies: ['Kotlin', 'Android'],
    featured: true,
    year: 2018,
    role: { en: 'Mobile Developer', id: 'Mobile Developer' },
    company: 'Jasamedika',
    status: 'live',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.codigo.klikdokter',
      appStore: 'https://apps.apple.com/us/app/klikdokter-jaga-sehatmu/id1001542966',
      website: 'https://www.klikdokter.com/',
    },
  },
  {
    slug: 'mangusada-on-mobile',
    title: 'Mangusada On Mobile',
    summary: {
      en: 'Patient registration for RSD Mangusada, Badung, Bali — queue and registration flows designed for a hospital information system rather than a consumer app.',
      id: 'Pendaftaran pasien untuk RSD Mangusada, Badung, Bali — alur antrean dan pendaftaran yang dirancang untuk sistem informasi rumah sakit, bukan aplikasi konsumen.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android'],
    featured: true,
    year: 2020,
    role: { en: 'Mobile Engineer', id: 'Mobile Engineer' },
    company: 'Docotel',
    status: 'live',
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=id.go.badungkab.rsudmangusada.pasien',
      website: 'https://rsudmangusada.badungkab.go.id/',
    },
  },
  {
    slug: 'all-beauty',
    title: 'All Beauty (A Lux Life)',
    summary: {
      en: 'Beauty and fragrance retail application covering a wide catalogue of prestige, artisan, and niche brands.',
      id: 'Aplikasi ritel produk kecantikan dan parfum dengan katalog luas untuk merek prestise, artisan, dan niche.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android', 'iOS'],
    featured: false,
    year: 2020,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=id.aluxlife.app',
      appStore: 'https://apps.apple.com/id/app/a-lux-life/id1498084784',
      website: 'https://www.allbeauty.com/',
    },
  },
  {
    slug: 'reyo-caller',
    title: 'Reyo — Caller',
    summary: {
      en: 'The caller side of Reyo, a peer support platform. Connects someone who needs to talk with an available listener, and handles the session lifecycle around that conversation.',
      id: 'Sisi penelepon dari Reyo, platform dukungan sebaya. Menghubungkan orang yang butuh bicara dengan pendengar yang tersedia, sekaligus menangani siklus hidup sesi percakapan itu.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android', 'iOS'],
    featured: false,
    year: 2022,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.reyo.caller',
      appStore: 'https://apps.apple.com/id/app/reyo-talk-without-judgment/id1633000202',
      website: 'https://www.helloreyo.com/id/home-id/',
    },
  },
  {
    slug: 'reyo-listener',
    title: 'Reyo — Listener',
    summary: {
      en: 'The listener-side companion application to Reyo Caller. Manages availability, incoming session requests, and the tools a listener needs while a conversation is running.',
      id: 'Aplikasi pendamping sisi pendengar untuk Reyo Caller. Mengelola ketersediaan, permintaan sesi masuk, dan perkakas yang dibutuhkan pendengar selama percakapan berlangsung.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android', 'iOS'],
    featured: false,
    year: 2022,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.reyo.listener',
      appStore: 'https://apps.apple.com/id/app/reyo-listener/id1633000544',
      website: 'https://www.helloreyo.com/id/home-id/',
    },
  },
  {
    slug: 'relaxology',
    title: 'Relaxology',
    summary: {
      en: 'On-demand grooming and relaxation services — booking, scheduling, and service selection in a consumer Flutter application.',
      id: 'Layanan grooming dan relaksasi on-demand — pemesanan, penjadwalan, dan pemilihan layanan dalam aplikasi Flutter untuk konsumen.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android', 'iOS'],
    featured: false,
    year: 2023,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=co.id.relax',
      appStore: 'https://apps.apple.com/id/app/relaxology/id6459829813',
      website: 'https://relax.co.id/',
    },
  },
  {
    slug: 'help-u',
    title: 'Help U',
    summary: {
      en: 'Customer-facing application for a professional cleaning service operating across houses, apartments, offices, and commercial property.',
      id: 'Aplikasi sisi pelanggan untuk layanan kebersihan profesional yang melayani rumah, apartemen, kantor, dan properti komersial.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android'],
    featured: false,
    year: 2022,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: { playStore: 'https://play.google.com/store/apps/details?id=id.helpu.android' },
  },
  {
    slug: 'help-u-helper',
    title: 'Help U Helper',
    summary: {
      en: 'The field-worker counterpart to Help U — job assignment, scheduling, and completion flows for cleaning staff.',
      id: 'Pasangan aplikasi Help U untuk petugas lapangan — penugasan pekerjaan, penjadwalan, dan alur penyelesaian bagi staf kebersihan.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android'],
    featured: false,
    year: 2022,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: { playStore: 'https://play.google.com/store/apps/details?id=id.helpu.helper' },
  },
  {
    // The previous site showed Help U's cleaning-service copy here. Corrected:
    // KBPP POLRI is the Indonesian National Police family association.
    slug: 'kbpp-polri',
    title: 'KBPP POLRI',
    summary: {
      en: 'Internal application for KBPP POLRI, the family association of the Indonesian National Police — membership data and organisational information for a nationwide member base.',
      id: 'Aplikasi internal KBPP POLRI, organisasi keluarga besar Putra Putri Polri — data keanggotaan dan informasi organisasi untuk anggota di seluruh Indonesia.',
    },
    type: 'product',
    technologies: ['Flutter', 'Android'],
    featured: false,
    year: 2022,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.kbpppolri.internal',
      website: 'https://app.kbpp-polri.or.id/',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
