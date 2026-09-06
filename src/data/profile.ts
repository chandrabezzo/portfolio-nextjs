export const profile = {
  name: 'Chandra Abdul Fattah',
  role: 'Software Engineering Consultant',
  brand: 'Solusi Bejo',
  brandLine: 'Independent software engineering practice by Chandra Abdul Fattah.',
  location: 'Sumedang, West Java, Indonesia',
  email: 'chandrashibezzo@gmail.com',
  url: 'https://solusibejo.com',
  alumniOf: 'Universitas Nasional PASIM',

  headline: 'I solve complex software engineering problems.',

  intro:
    'Software Engineering Consultant with more than a decade of experience across mobile, web, and backend engineering — specializing in Flutter, Android and iOS native integration, SDKs, plugins, architecture, and developer tooling.',

  // Kept deliberately concrete. See §69 of the brief: no "world-class", no "10x".
  summary:
    'I help teams build, modernize, and debug mobile systems where Flutter meets native Android and iOS. Most of my work sits at the boundary between Dart and the platform — the place where SDKs, plugins, and platform channels either hold up under production load or quietly fall apart.',

  specializations: [
    'Mobile Engineering',
    'Flutter',
    'Android',
    'iOS',
    'Native Integrations',
    'SDK & Plugin Engineering',
    'Software Architecture',
    'Developer Tooling',
    'AI-Augmented Engineering',
  ],

  // Every claim here is checkable against the experience and open-source data.
  proof: [
    { value: 'Since 2014', label: 'Building software' },
    { value: 'Staff level', label: 'Mobile engineering' },
    { value: '20+', label: 'Published packages & contributions' },
    { value: 'Flutter', label: 'Android · iOS · Native' },
  ],

  resumeUrl:
    'https://drive.google.com/drive/folders/1VZaL5inHTdbDvRIAHPsYARvZ89IhHa-5?usp=sharing',
  upworkUrl: 'https://www.upwork.com/freelancers/~012eaf425acc314d8f',
} as const
