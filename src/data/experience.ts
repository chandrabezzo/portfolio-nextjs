import type { L10n } from '@/lib/i18n'

export interface Position {
  title: L10n
  period: string
  highlights: L10n[]
}

export interface Job {
  company: string
  companyUrl?: string
  product?: { name: string; url: string; description: L10n }
  context: L10n
  positions: Position[]
}

export const experience: Job[] = [
  // Titles, engagement types and dates verified from the public LinkedIn
  // Experience section on 2026-09-07: https://www.linkedin.com/in/chandra-abdul-fattah/
  // Company/product context: https://www.techlab.com.my/ and https://www.geoxspot.com/
  {
    company: 'TechLab Security Sdn Bhd',
    companyUrl: 'https://www.techlab.com.my/',
    product: {
      name: 'GeoXSpot',
      url: 'https://www.geoxspot.com/',
      description: {
        en: 'Transportation software for fleet visibility, real-time tracking, and driver operations.',
        id: 'Software transportasi untuk pemantauan armada, pelacakan real-time, dan operasional pengemudi.',
      },
    },
    context: {
      en: 'Malaysian cybersecurity company; mobile engineering for the GeoXSpot transportation platform.',
      id: 'Perusahaan keamanan siber Malaysia; rekayasa mobile untuk platform transportasi GeoXSpot.',
    },
    positions: [
      {
        title: {
          en: 'Lead Mobile Developer · Part-time',
          id: 'Lead Mobile Developer · Paruh waktu',
        },
        period: 'February 2026 — Present',
        highlights: [
          {
            en: 'Lead the design, development, and technical evolution of cross-platform Flutter applications, with a focus on scalability, performance, and clean architecture.',
            id: 'Memimpin desain, pengembangan, dan evolusi teknis aplikasi Flutter lintas platform, dengan fokus pada skalabilitas, performa, dan clean architecture.',
          },
        ],
      },
    ],
  },
  {
    company: 'PT. Lentera Duta Persada',
    companyUrl: 'https://ldpgroup.co.id/',
    // Company scope only; LinkedIn does not supply a personal role description.
    // https://digital.ldpgroup.co.id/ describes ERP, custom software and consulting.
    context: {
      en: 'Integrated business services, including ERP, custom software, and digital consulting through LDP Digital.',
      id: 'Layanan bisnis terintegrasi, termasuk ERP, software kustom, dan konsultasi digital melalui LDP Digital.',
    },
    positions: [
      {
        title: { en: 'Co-Founder', id: 'Co-Founder' },
        period: 'August 2025 — Present',
        highlights: [],
      },
    ],
  },
  {
    company: 'Cloud Creatures',
    companyUrl: 'https://thecloudcreatures.com/',
    // Public company context: https://www.linkedin.com/company/cloud-creatures/
    context: {
      en: 'Kuala Lumpur-based technology company developing commerce, business operations, and mobile solutions.',
      id: 'Perusahaan teknologi berbasis di Kuala Lumpur yang mengembangkan solusi commerce, operasional bisnis, dan aplikasi mobile.',
    },
    positions: [
      {
        title: { en: 'Mobile Engineer · Freelance', id: 'Mobile Engineer · Freelance' },
        period: 'June 2025 — Present',
        highlights: [
          {
            en: 'Maintain and develop cross-platform Flutter applications, guiding their design and technical evolution.',
            id: 'Merawat dan mengembangkan aplikasi Flutter lintas platform, sekaligus mengarahkan desain dan evolusi teknisnya.',
          },
        ],
      },
    ],
  },
  {
    company: 'Evermos',
    companyUrl: 'https://evermos.com',
    context: {
      en: 'Sharia-based reseller ecosystem serving a nationwide reseller network across Indonesia.',
      id: 'Ekosistem reseller berbasis syariah yang melayani jaringan reseller di seluruh Indonesia.',
    },
    positions: [
      {
        title: { en: 'Staff Engineer, Mobile', id: 'Staff Engineer, Mobile' },
        period: 'April 2023 — Present',
        highlights: [
          {
            en: 'Set technical direction for the mobile platform, and own the architectural decisions that outlive any single feature.',
            id: 'Menetapkan arah teknis platform mobile, dan memegang keputusan arsitektur yang bertahan lebih lama dari fitur mana pun.',
          },
          {
            en: 'Raise engineering effectiveness across the mobile team — tooling, standards, and the feedback loops engineers work inside every day.',
            id: 'Meningkatkan efektivitas engineering tim mobile — tooling, standar, dan umpan balik yang dipakai engineer setiap hari.',
          },
          {
            en: 'Mentor engineers and sponsor their work, so good decisions spread further than the person who made them first.',
            id: 'Membimbing engineer dan mendukung karya mereka, agar keputusan yang baik menyebar lebih jauh dari orang yang pertama membuatnya.',
          },
          {
            en: 'Act as glue across product, backend, and platform teams where mobile constraints are easiest to miss.',
            id: 'Menjadi perekat antara tim produk, backend, dan platform, di titik yang paling mudah melewatkan batasan mobile.',
          },
          {
            en: 'Run exploration on native platform capabilities and AI-assisted engineering workflows before committing the team to them.',
            id: 'Menjalankan eksplorasi kemampuan platform native dan alur kerja rekayasa berbantu AI sebelum tim berkomitmen memakainya.',
          },
        ],
      },
      {
        title: { en: 'Senior Mobile Engineer', id: 'Senior Mobile Engineer' },
        period: 'January 2022 — April 2023',
        highlights: [
          {
            en: 'Built up the mobile engineering team — hiring bar, review culture, and shared architectural vocabulary.',
            id: 'Membangun tim mobile engineering — standar perekrutan, budaya review, dan kosakata arsitektur bersama.',
          },
          {
            en: 'Improved the day-to-day development experience: faster feedback, fewer sharp edges, less accidental complexity.',
            id: 'Memperbaiki pengalaman pengembangan sehari-hari: umpan balik lebih cepat, lebih sedikit jebakan, lebih sedikit kerumitan tak disengaja.',
          },
          {
            en: 'Hardened app robustness by attacking crash and lifecycle classes rather than individual incident tickets.',
            id: 'Memperkuat ketahanan aplikasi dengan menyerang kelas crash dan lifecycle, bukan tiket insiden satu per satu.',
          },
        ],
      },
      {
        title: { en: 'Mobile Engineer', id: 'Mobile Engineer' },
        period: 'March 2021 — December 2021',
        highlights: [
          {
            en: 'Built Ikhtiar by Evermos from scratch for Android and iOS.',
            id: 'Membangun Ikhtiar by Evermos dari nol untuk Android dan iOS.',
          },
          {
            en: 'Defined the architecture, project structure, and the module boundaries the app would grow into.',
            id: 'Menentukan arsitektur, struktur proyek, dan batas modul yang akan menjadi tempat aplikasi bertumbuh.',
          },
          {
            en: 'Shipped feature work and stability fixes in the existing Evermos Android application.',
            id: 'Merilis pekerjaan fitur dan perbaikan stabilitas di aplikasi Evermos Android yang sudah ada.',
          },
        ],
      },
    ],
  },
  {
    company: 'Docotel',
    context: {
      en: 'Healthcare information systems for Indonesian hospitals.',
      id: 'Sistem informasi kesehatan untuk rumah sakit di Indonesia.',
    },
    positions: [
      {
        title: { en: 'Mobile Engineer', id: 'Mobile Engineer' },
        period: 'December 2018 — March 2021',
        highlights: [
          {
            en: 'Built and maintained patient registration applications for hospital clients.',
            id: 'Membangun dan merawat aplikasi pendaftaran pasien untuk klien rumah sakit.',
          },
          {
            en: 'Established the architecture and project structure used across healthcare mobile projects.',
            id: 'Menetapkan arsitektur dan struktur proyek yang dipakai lintas proyek mobile kesehatan.',
          },
          {
            en: 'Researched wearable device integration for in-hospital patient monitoring.',
            id: 'Meneliti integrasi perangkat wearable untuk pemantauan pasien di rumah sakit.',
          },
        ],
      },
    ],
  },
  {
    company: 'Jasamedika',
    context: {
      en: 'Healthcare and enterprise software.',
      id: 'Perangkat lunak kesehatan dan enterprise.',
    },
    positions: [
      {
        title: { en: 'Mobile Developer', id: 'Mobile Developer' },
        period: 'August 2017 — November 2018',
        highlights: [
          {
            en: 'Built and maintained patient registration applications for hospital clients.',
            id: 'Membangun dan merawat aplikasi pendaftaran pasien untuk klien rumah sakit.',
          },
          {
            en: 'Built and maintained the HRIS mobile application for Artha Graha Group.',
            id: 'Membangun dan merawat aplikasi mobile HRIS untuk Artha Graha Group.',
          },
        ],
      },
    ],
  },
  {
    company: 'Tujuh Sembilan',
    context: { en: 'Software house.', id: 'Software house.' },
    positions: [
      {
        title: { en: 'Software Engineer, Internship', id: 'Software Engineer, Magang' },
        period: 'July 2016 — September 2016',
        highlights: [
          {
            en: 'Developed the API behind a consignment application for Android.',
            id: 'Mengembangkan API di balik aplikasi konsinyasi untuk Android.',
          },
        ],
      },
    ],
  },
  {
    company: 'Solusi Bejo',
    context: {
      en: 'Independent engineering practice — consulting, product delivery, and open-source work.',
      id: 'Praktik rekayasa independen — konsultasi, pengiriman produk, dan karya open source.',
    },
    positions: [
      {
        title: {
          en: 'Business Owner · Independent Software Engineer',
          id: 'Pemilik Usaha · Software Engineer Independen',
        },
        period: 'August 2017 — Present',
        highlights: [
          {
            en: 'Deliver mobile applications for Android and iOS for direct clients.',
            id: 'Mengerjakan aplikasi mobile Android dan iOS untuk klien langsung.',
          },
          {
            en: 'Build and publish open-source Flutter packages and plugins.',
            id: 'Membangun dan memublikasikan paket serta plugin Flutter open source.',
          },
          {
            en: 'Take technical ownership end to end: scoping, architecture, delivery, and release.',
            id: 'Memegang kepemilikan teknis dari hulu ke hilir: pelingkupan, arsitektur, pengerjaan, dan rilis.',
          },
        ],
      },
    ],
  },
]
