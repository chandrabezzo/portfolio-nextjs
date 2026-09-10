export const LANGS = ['en', 'id'] as const
export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'en'

/** A string that exists in both languages. */
export type L10n = { en: string; id: string }

export const t = (value: L10n, lang: Lang): string => value[lang]

/**
 * English lives at the root (/about) and Indonesian under /id (/id/about).
 * Keeping English unprefixed preserves the URLs the live site already has.
 */
export const langPath = (lang: Lang, path: string): string => {
  const clean = path === '/' ? '' : path
  return lang === 'en' ? clean || '/' : `/id${clean}`
}

export const LANG_LABEL: Record<Lang, string> = { en: 'English', id: 'Bahasa Indonesia' }
export const LANG_SHORT: Record<Lang, string> = { en: 'EN', id: 'ID' }
/** BCP 47 tags for <html lang> and hreflang. */
export const LANG_TAG: Record<Lang, string> = { en: 'en', id: 'id-ID' }

export const ui = {
  navWork: { en: 'Work', id: 'Portofolio' },
  navExpertise: { en: 'Expertise', id: 'Keahlian' },
  navOpenSource: { en: 'Open Source', id: 'Open Source' },
  navInsights: { en: 'Insights', id: 'Tulisan' },
  navAbout: { en: 'About', id: 'Tentang' },
  navArchive: { en: 'Archive', id: 'Arsip' },
  navContact: { en: 'Contact', id: 'Kontak' },

  ctaDiscuss: { en: 'Discuss a Problem', id: 'Diskusikan Masalah' },
  ctaDiscussLong: { en: 'Discuss a Technical Problem', id: 'Diskusikan Masalah Teknis' },
  ctaExploreWork: { en: 'Explore Selected Work', id: 'Lihat Portofolio Pilihan' },
  ctaReadCase: { en: 'Read the case study', id: 'Baca studi kasus' },
  ctaAllCases: { en: 'All case studies', id: 'Semua studi kasus' },
  ctaAllOpenSource: { en: 'All open-source work', id: 'Semua karya open source' },
  ctaAllExpertise: { en: 'All areas of expertise', id: 'Semua bidang keahlian' },
  ctaFullStory: { en: 'Read the full story', id: 'Baca kisah lengkapnya' },
  ctaDiscussWithMe: { en: 'Discuss it with me', id: 'Diskusikan dengan saya' },
  ctaGoHome: { en: 'Go home', id: 'Ke beranda' },
  ctaCv: { en: 'Curriculum vitae', id: 'Curriculum vitae' },
  ctaLinkedIn: {
    en: 'Full work history on LinkedIn',
    id: 'Riwayat kerja lengkap di LinkedIn',
  },
  ctaMedium: { en: 'Read articles on Medium', id: 'Baca artikel di Medium' },

  eyebrowWhatIDo: { en: 'What I do', id: 'Yang saya kerjakan' },
  eyebrowSelectedWork: { en: 'Selected work', id: 'Portofolio pilihan' },
  eyebrowExpertise: { en: 'Expertise', id: 'Keahlian' },
  eyebrowOpenSource: { en: 'Open source', id: 'Open source' },
  eyebrowSocialProof: { en: 'Recommendations', id: 'Rekomendasi' },
  eyebrowAbout: { en: 'About', id: 'Tentang' },
  eyebrowContact: { en: 'Contact', id: 'Kontak' },
  eyebrowJourney: { en: 'Journey', id: 'Perjalanan' },
  eyebrowExperience: { en: 'Experience', id: 'Pengalaman' },
  eyebrowProducts: { en: 'Products', id: 'Produk' },
  eyebrowArchive: { en: 'Archive', id: 'Arsip' },
  eyebrowEngagements: { en: 'Engagements', id: 'Bentuk kerja sama' },
  eyebrowCaseStudy: { en: 'Engineering case study', id: 'Studi kasus rekayasa' },
  eyebrowAiEngineering: { en: 'AI-Augmented Engineering', id: 'Rekayasa Berbantu AI' },
  eyebrowContents: { en: 'Contents', id: 'Daftar isi' },
  eyebrowSite: { en: 'Site', id: 'Situs' },
  eyebrowElsewhere: { en: 'Elsewhere', id: 'Tautan lain' },
  eyebrowRelatedWork: { en: 'Related work', id: 'Karya terkait' },
  eyebrowEmail: { en: 'Email', id: 'Email' },
  eyebrowBasedIn: { en: 'Based in', id: 'Berbasis di' },

  headProblems: { en: 'Problems I solve', id: 'Masalah yang saya selesaikan' },
  leadProblems: {
    en: 'Practical support for the decisions, integrations, and production issues that slow mobile teams down.',
    id: 'Dukungan untuk keputusan teknis, integrasi, dan masalah produksi yang menghambat tim mobile.',
  },
  headCaseStudies: { en: 'Engineering case studies', id: 'Studi kasus rekayasa' },
  leadCaseStudies: {
    en: 'Selected work covering the problem, my role, the technical decisions, and the evidence available to review.',
    id: 'Pekerjaan pilihan yang menjelaskan masalah, peran saya, keputusan teknis, dan bukti yang dapat ditinjau.',
  },
  headExpertise: { en: 'Areas of expertise', id: 'Bidang keahlian' },
  headOpenSource: { en: 'Technical evidence', id: 'Bukti teknis' },
  leadOpenSource: {
    en: 'Packages, plugins, and upstream contributions — published, versioned, and used by other engineers.',
    id: 'Paket, plugin, dan kontribusi upstream — dipublikasikan, diversikan, dan dipakai engineer lain.',
  },
  headTestimonials: { en: 'What colleagues say', id: 'Kata rekan kerja' },
  headJourney: { en: 'My engineering journey', id: 'Perjalanan rekayasa saya' },
  headExperience: { en: 'Where I have worked', id: 'Tempat saya bekerja' },
  headShipped: { en: 'Shipped products', id: 'Produk yang dirilis' },
  leadShipped: {
    en: 'Applications built or led across commerce, healthcare, and consumer products.',
    id: 'Aplikasi yang saya bangun atau pimpin di bidang commerce, kesehatan, dan produk konsumen.',
  },
  headEngagements: { en: 'How this usually starts', id: 'Bagaimana biasanya dimulai' },
  headSimilarProblem: {
    en: 'Facing a similar engineering problem?',
    id: 'Menghadapi masalah rekayasa serupa?',
  },
  headFinalCta: {
    en: 'Facing a problem at the edge of the platform?',
    id: 'Menghadapi masalah di batas platform?',
  },
  leadFinalCta: {
    en: 'Share your product, the technical challenge, and the outcome you need. We can discuss the scope and a practical next step.',
    id: 'Ceritakan produk, tantangan teknis, dan hasil yang Anda butuhkan. Kita dapat membahas lingkup pekerjaan dan langkah berikutnya.',
  },

  labelRole: { en: 'Role', id: 'Peran' },
  labelCompany: { en: 'Company', id: 'Perusahaan' },
  labelTimeline: { en: 'Timeline', id: 'Periode' },
  labelUpdated: { en: 'Updated', id: 'Diperbarui' },
  labelUpstream: { en: 'Upstream', id: 'Upstream' },
  labelYear: { en: 'Year', id: 'Tahun' },
  labelTitle: { en: 'Title', id: 'Judul' },
  labelMadeAt: { en: 'Made at', id: 'Dibuat di' },
  labelBuiltWith: { en: 'Built with', id: 'Dibangun dengan' },
  labelLink: { en: 'Link', id: 'Tautan' },
  labelPlayStore: { en: 'Play Store', id: 'Play Store' },
  labelAppStore: { en: 'App Store', id: 'App Store' },
  labelWebsite: { en: 'Website', id: 'Situs web' },
  labelViewPr: { en: 'View pull request', id: 'Lihat pull request' },
  labelSkipToContent: { en: 'Skip to content', id: 'Lompat ke konten' },
  labelOpenMenu: { en: 'Open menu', id: 'Buka menu' },
  labelCloseMenu: { en: 'Close menu', id: 'Tutup menu' },
  labelToggleTheme: { en: 'Toggle theme', id: 'Ganti tema' },
  labelLanguage: { en: 'Language', id: 'Bahasa' },
  labelLanguages: { en: 'Languages', id: 'Bahasa' },
  labelAuthor: { en: 'Author', id: 'Penulis' },
  labelAllProjectsByYear: { en: 'All projects by year', id: 'Semua proyek per tahun' },
  labelMainNav: { en: 'Main', id: 'Utama' },
  labelFooterNav: { en: 'Footer', id: 'Footer' },
  labelCategories: { en: 'Categories', id: 'Kategori' },

  placeholderWarning: {
    en: 'Placeholder content — awaiting real recommendations. Not for production.',
    id: 'Konten sementara — menunggu rekomendasi asli. Belum untuk produksi.',
  },
  notFoundTitle: { en: 'This page does not exist.', id: 'Halaman ini tidak ada.' },
  notFoundBody: {
    en: 'The link may be out of date. The work and open-source sections are the best places to start.',
    id: 'Tautannya mungkin sudah usang. Bagian portofolio dan open source adalah tempat terbaik untuk memulai.',
  },
} satisfies Record<string, L10n>

export type UiKey = keyof typeof ui
