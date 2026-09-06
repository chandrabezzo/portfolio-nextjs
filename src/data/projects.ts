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
  summary: string
  type: 'product' | 'open-source' | 'consulting' | 'tooling'
  technologies: string[]
  featured: boolean
  year?: number
  role?: string
  company?: string
  /** Set when the app is no longer distributed — keeps the archive honest. */
  status?: 'live' | 'discontinued' | 'unknown'
  links?: ProjectLinks
}

export const projects: Project[] = [
  {
    slug: 'evermos',
    title: 'Evermos',
    summary:
      'A sharia-based reseller ecosystem connecting curated local products with a nationwide reseller network. Cross-platform Flutter delivery on Android and iOS, backed by an architecture built to survive continuous feature growth.',
    type: 'product',
    technologies: ['Flutter', 'Android', 'iOS', 'Architecture'],
    featured: true,
    year: 2021,
    role: 'Staff Engineer, Mobile',
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
    summary:
      'Integrated healthcare services in a consumer application — consultation, articles, and health tooling. Native Android engineering in Kotlin.',
    type: 'product',
    technologies: ['Kotlin', 'Android'],
    featured: true,
    year: 2018,
    role: 'Mobile Developer',
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
    summary:
      'Patient registration for RSD Mangusada, Badung, Bali — queue and registration flows designed for a hospital information system rather than a consumer app.',
    type: 'product',
    technologies: ['Flutter', 'Android'],
    featured: true,
    year: 2020,
    role: 'Mobile Engineer',
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
    summary:
      'Beauty and fragrance retail application covering a wide catalogue of prestige, artisan, and niche brands.',
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
    summary:
      'The caller side of Reyo, a peer support platform. Connects someone who needs to talk with an available listener, and handles the session lifecycle around that conversation.',
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
    summary:
      'The listener-side companion application to Reyo Caller. Manages availability, incoming session requests, and the tools a listener needs while a conversation is running.',
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
    summary:
      'On-demand grooming and relaxation services — booking, scheduling, and service selection in a consumer Flutter application.',
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
    summary:
      'Customer-facing application for a professional cleaning service operating across houses, apartments, offices, and commercial property.',
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
    summary:
      'The field-worker counterpart to Help U — job assignment, scheduling, and completion flows for cleaning staff.',
    type: 'product',
    technologies: ['Flutter', 'Android'],
    featured: false,
    year: 2022,
    company: 'Solusi Bejo',
    status: 'unknown',
    links: { playStore: 'https://play.google.com/store/apps/details?id=id.helpu.helper' },
  },
  {
    // Description on the previous site was a copy-paste of the Help U cleaning-service
    // text. Corrected here: KBPP POLRI is the Indonesian Police family association.
    slug: 'kbpp-polri',
    title: 'KBPP POLRI',
    summary:
      'Internal application for KBPP POLRI, the family association of the Indonesian National Police — membership data and organisational information for a nationwide member base.',
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
