import type { L10n } from '@/lib/i18n'

export const profile = {
  name: 'Chandra Abdul Fattah',
  role: {
    en: 'Software Engineering Consultant',
    id: 'Konsultan Rekayasa Perangkat Lunak',
  } satisfies L10n,
  brand: 'Solusi Bejo',
  brandLine: {
    en: 'Independent software engineering practice by Chandra Abdul Fattah.',
    id: 'Praktik rekayasa perangkat lunak independen oleh Chandra Abdul Fattah.',
  } satisfies L10n,
  location: {
    en: 'Sumedang, West Java, Indonesia',
    id: 'Sumedang, Jawa Barat, Indonesia',
  } satisfies L10n,
  email: 'chandrashibezzo@gmail.com',
  url: 'https://solusibejo.com',

  headline: {
    en: 'I solve complex software engineering problems.',
    id: 'Saya menyelesaikan masalah rekayasa perangkat lunak yang kompleks.',
  } satisfies L10n,

  intro: {
    en: 'Software Engineering Consultant with more than a decade of experience across mobile, web, and backend engineering — specializing in Flutter, Android and iOS native integration, SDKs, plugins, architecture, and developer tooling.',
    id: 'Konsultan rekayasa perangkat lunak dengan pengalaman lebih dari satu dekade di bidang mobile, web, dan backend — dengan spesialisasi Flutter, integrasi native Android dan iOS, SDK, plugin, arsitektur, serta developer tooling.',
  } satisfies L10n,

  summary: {
    en: 'I help teams build, modernize, and debug mobile systems where Flutter meets native Android and iOS. Most of my work sits at the boundary between Dart and the platform — the place where SDKs, plugins, and platform channels either hold up under production load or quietly fall apart.',
    id: 'Saya membantu tim membangun, memodernisasi, dan memperbaiki sistem mobile di titik pertemuan Flutter dengan Android dan iOS native. Sebagian besar pekerjaan saya berada di batas antara Dart dan platform — tempat di mana SDK, plugin, dan platform channel bertahan di beban produksi atau justru diam-diam berantakan.',
  } satisfies L10n,

  proof: [
    {
      value: { en: 'Since 2014', id: 'Sejak 2014' } satisfies L10n,
      label: { en: 'Building software', id: 'Membangun perangkat lunak' } satisfies L10n,
    },
    {
      value: { en: 'Staff level', id: 'Level Staff' } satisfies L10n,
      label: { en: 'Mobile engineering', id: 'Rekayasa mobile' } satisfies L10n,
    },
    {
      value: { en: '20+', id: '20+' } satisfies L10n,
      label: {
        en: 'Published packages & contributions',
        id: 'Paket & kontribusi terpublikasi',
      } satisfies L10n,
    },
    {
      value: { en: 'Flutter', id: 'Flutter' } satisfies L10n,
      label: { en: 'Android · iOS · Native', id: 'Android · iOS · Native' } satisfies L10n,
    },
  ],

  resumeUrl:
    'https://drive.google.com/drive/folders/1VZaL5inHTdbDvRIAHPsYARvZ89IhHa-5?usp=sharing',
  upworkUrl: 'https://www.upwork.com/freelancers/~012eaf425acc314d8f',
  linkedInUrl: 'https://www.linkedin.com/in/chandra-abdul-fattah/',
  mediumUrl: 'https://medium.com/@chandrabezzo',
}
