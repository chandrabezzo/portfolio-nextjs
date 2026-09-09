import type { L10n } from '@/lib/i18n'

export const profile = {
  name: 'Chandra Abdul Fattah',
  role: {
    en: 'Mobile Engineer & Flutter Consultant',
    id: 'Mobile Engineer & Konsultan Flutter',
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
    en: 'Complex software. Clear solutions.',
    id: 'Software kompleks. Solusi yang jelas.',
  } satisfies L10n,

  intro: {
    en: 'I help teams build reliable Flutter applications, connect native Android and iOS capabilities, and improve mobile architecture. My work spans Staff Engineering at Evermos, mobile leadership at TechLab Security, and freelance engineering with Cloud Creatures.',
    id: 'Saya membantu tim membangun aplikasi Flutter yang andal, mengintegrasikan kemampuan native Android dan iOS, serta memperbaiki arsitektur mobile. Pengalaman saya mencakup Staff Engineer di Evermos, lead mobile di TechLab Security, dan engineer freelance bersama Cloud Creatures.',
  } satisfies L10n,

  summary: {
    en: 'My focus is the connection between Flutter and the native platform: SDKs, plugins, platform channels, and the architecture around them. I help teams diagnose production issues, modernize existing applications, and build foundations that are easier to maintain.',
    id: 'Fokus saya adalah integrasi Flutter dengan platform native: SDK, plugin, platform channel, dan arsitektur yang mendukungnya. Saya membantu tim mendiagnosis masalah produksi, memodernisasi aplikasi, dan membangun fondasi yang lebih mudah dirawat.',
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
      value: { en: 'Open source', id: 'Open source' } satisfies L10n,
      label: {
        en: 'Published plugins & contributions',
        id: 'Plugin & kontribusi terpublikasi',
      } satisfies L10n,
    },
    {
      value: { en: 'Flutter', id: 'Flutter' } satisfies L10n,
      label: { en: 'Android · iOS · Native', id: 'Android · iOS · Native' } satisfies L10n,
    },
  ],

  resumeUrl: 'https://drive.google.com/drive/folders/1VZaL5inHTdbDvRIAHPsYARvZ89IhHa-5?usp=sharing',
  upworkUrl: 'https://www.upwork.com/freelancers/~012eaf425acc314d8f',
  linkedInUrl: 'https://www.linkedin.com/in/chandra-abdul-fattah/',
  mediumUrl: 'https://medium.com/@chandrabezzo',
}
