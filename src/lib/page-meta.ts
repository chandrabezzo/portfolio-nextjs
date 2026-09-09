import type { Lang } from '@/lib/i18n'

type Entry = Record<Lang, { title: string; description: string }>

/** Unique title + description per route per language (brief §39). */
export const meta: Record<
  'about' | 'work' | 'expertise' | 'openSource' | 'contact' | 'archive',
  Entry
> = {
  about: {
    en: {
      title: 'Experience & Credentials',
      description:
        'Explore Chandra’s mobile engineering experience at Evermos, TechLab Security, and Cloud Creatures, plus mentoring, education, and certification history.',
    },
    id: {
      title: 'Pengalaman & Kredensial',
      description:
        'Pengalaman mobile engineering Chandra di Evermos, TechLab Security, dan Cloud Creatures, serta mentoring, pendidikan, dan riwayat sertifikasi.',
    },
  },
  work: {
    en: {
      title: 'Flutter & Mobile Engineering Work',
      description:
        'Explore Flutter architecture, native plugin integration, and developer tooling through case studies, professional roles, and mobile products.',
    },
    id: {
      title: 'Portofolio',
      description:
        'Jelajahi arsitektur Flutter, integrasi plugin native, dan developer tooling melalui studi kasus, pengalaman profesional, serta produk mobile.',
    },
  },
  expertise: {
    en: {
      title: 'Flutter Consulting & Native Integration',
      description:
        'Get help with Flutter architecture, Android and iOS integration, native SDKs, plugins, debugging, and developer tooling from a Staff-level mobile engineer.',
    },
    id: {
      title: 'Konsultasi Flutter & Integrasi Native',
      description:
        'Dukungan arsitektur Flutter, integrasi Android dan iOS, SDK native, plugin, debugging, serta developer tooling dari mobile engineer level Staff.',
    },
  },
  openSource: {
    en: {
      title: 'Open Source Flutter Packages & Plugins',
      description:
        'Explore Chandra’s published Flutter packages, Screen Time plugin, developer tools, and upstream contributions, with links to source code and pub.dev.',
    },
    id: {
      title: 'Open Source',
      description:
        'Jelajahi paket Flutter, plugin Screen Time, developer tools, dan kontribusi upstream Chandra, lengkap dengan tautan kode sumber dan pub.dev.',
    },
  },
  contact: {
    en: {
      title: 'Contact a Flutter & Mobile Consultant',
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
        'Browse mobile applications, published packages, native plugins, and upstream contributions by Chandra Abdul Fattah, with project links and roles.',
    },
    id: {
      title: 'Arsip',
      description:
        'Jelajahi aplikasi mobile, paket terpublikasi, plugin native, dan kontribusi upstream Chandra Abdul Fattah, beserta tautan proyek dan perannya.',
    },
  },
}
