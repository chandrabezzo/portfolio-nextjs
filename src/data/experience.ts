export interface Position {
  title: string
  period: string
  /** Impact-oriented, not a responsibility list (brief §33). */
  highlights: string[]
}

export interface Job {
  company: string
  companyUrl?: string
  context: string
  positions: Position[]
}

export const experience: Job[] = [
  {
    company: 'Evermos',
    companyUrl: 'https://evermos.com',
    context: 'Sharia-based reseller ecosystem serving a nationwide reseller network across Indonesia.',
    positions: [
      {
        title: 'Staff Engineer, Mobile',
        period: 'April 2023 — Present',
        highlights: [
          'Set technical direction for the mobile platform, and own the architectural decisions that outlive any single feature.',
          'Raise engineering effectiveness across the mobile team — tooling, standards, and the feedback loops engineers work inside every day.',
          'Mentor engineers and sponsor their work, so good decisions spread further than the person who made them first.',
          'Act as glue across product, backend, and platform teams where mobile constraints are easiest to miss.',
          'Run exploration on native platform capabilities and AI-assisted engineering workflows before committing the team to them.',
        ],
      },
      {
        title: 'Senior Mobile Engineer',
        period: 'January 2022 — April 2023',
        highlights: [
          'Built up the mobile engineering team — hiring bar, review culture, and shared architectural vocabulary.',
          'Improved the day-to-day development experience: faster feedback, fewer sharp edges, less accidental complexity.',
          'Hardened app robustness by attacking crash and lifecycle classes rather than individual incident tickets.',
        ],
      },
      {
        title: 'Mobile Engineer',
        period: 'March 2021 — December 2021',
        highlights: [
          'Built Ikhtiar by Evermos from scratch for Android and iOS.',
          'Defined the architecture, project structure, and the module boundaries the app would grow into.',
          'Shipped feature work and stability fixes in the existing Evermos Android application.',
        ],
      },
    ],
  },
  {
    company: 'Docotel',
    context: 'Healthcare information systems for Indonesian hospitals.',
    positions: [
      {
        title: 'Mobile Engineer',
        period: 'December 2018 — March 2021',
        highlights: [
          'Built and maintained patient registration applications for hospital clients.',
          'Established the architecture and project structure used across healthcare mobile projects.',
          'Researched wearable device integration for in-hospital patient monitoring.',
        ],
      },
    ],
  },
  {
    company: 'Jasamedika',
    context: 'Healthcare and enterprise software.',
    positions: [
      {
        title: 'Mobile Developer',
        period: 'August 2017 — November 2018',
        highlights: [
          'Built and maintained patient registration applications for hospital clients.',
          'Built and maintained the HRIS mobile application for Artha Graha Group.',
        ],
      },
    ],
  },
  {
    company: 'Tujuh Sembilan',
    context: 'Software house.',
    positions: [
      {
        title: 'Software Engineer, Internship',
        period: 'July 2016 — September 2016',
        highlights: ['Developed the API behind a consignment application for Android.'],
      },
    ],
  },
  {
    company: 'Solusi Bejo',
    context: 'Independent engineering practice — consulting, product delivery, and open-source work.',
    positions: [
      {
        title: 'Independent Software Engineer',
        period: 'July 2015 — Present',
        highlights: [
          'Deliver mobile applications for Android and iOS for direct clients.',
          'Build and publish open-source Flutter packages and plugins.',
          'Take technical ownership end to end: scoping, architecture, delivery, and release.',
        ],
      },
    ],
  },
]
