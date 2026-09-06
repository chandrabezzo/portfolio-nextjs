import type { Lang } from '@/lib/i18n'

type Entry = Record<Lang, { title: string; description: string }>

/** Unique title + description per route per language (brief §39). */
export const meta: Record<
  'about' | 'work' | 'expertise' | 'openSource' | 'contact' | 'archive',
  Entry
> = {
  about: {
    en: {
      title: 'About',
      description:
        'The engineering progression of Chandra Abdul Fattah — from web development in 2014 through native Android, React Native, and Flutter, to staff-level mobile engineering. Education, certifications, and full work history.',
    },
    id: {
      title: 'Tentang',
      description:
        'Perjalanan rekayasa Chandra Abdul Fattah — dari pengembangan web pada 2014, lewat Android native, React Native, dan Flutter, hingga rekayasa mobile level staff. Pendidikan, sertifikasi, dan riwayat kerja lengkap.',
    },
  },
  work: {
    en: {
      title: 'Selected Work',
      description:
        'Engineering case studies and shipped mobile products — Flutter, Android, and iOS work described as engineering problems rather than product marketing.',
    },
    id: {
      title: 'Portofolio',
      description:
        'Studi kasus rekayasa dan produk mobile yang sudah dirilis — pekerjaan Flutter, Android, dan iOS yang diceritakan sebagai masalah rekayasa, bukan materi pemasaran produk.',
    },
  },
  expertise: {
    en: {
      title: 'Expertise',
      description:
        'Mobile engineering, Flutter, native Android and iOS integration, SDK and plugin engineering, architecture and modernization, developer tooling, technical consulting, and AI-augmented engineering.',
    },
    id: {
      title: 'Keahlian',
      description:
        'Rekayasa mobile, Flutter, integrasi native Android dan iOS, rekayasa SDK dan plugin, arsitektur dan modernisasi, developer tooling, konsultasi teknis, serta rekayasa berbantu AI.',
    },
  },
  openSource: {
    en: {
      title: 'Open Source',
      description:
        'Published Flutter packages, plugins, SDKs, developer tools, and upstream contributions — open source as technical evidence.',
    },
    id: {
      title: 'Open Source',
      description:
        'Paket Flutter, plugin, SDK, perkakas developer, dan kontribusi upstream yang sudah dipublikasikan — open source sebagai bukti teknis.',
    },
  },
  contact: {
    en: {
      title: 'Discuss a Technical Problem',
      description:
        'Start a conversation about building, modernizing, integrating, or debugging a mobile system — Flutter, Android, iOS, SDKs, plugins, and developer tooling.',
    },
    id: {
      title: 'Diskusikan Masalah Teknis',
      description:
        'Mulai percakapan tentang membangun, memodernisasi, mengintegrasikan, atau memperbaiki sistem mobile — Flutter, Android, iOS, SDK, plugin, dan developer tooling.',
    },
  },
  archive: {
    en: {
      title: 'Archive',
      description:
        'A complete list of applications, packages, plugins, and contributions built by Chandra Abdul Fattah.',
    },
    id: {
      title: 'Arsip',
      description:
        'Daftar lengkap aplikasi, paket, plugin, dan kontribusi yang dibangun Chandra Abdul Fattah.',
    },
  },
}
