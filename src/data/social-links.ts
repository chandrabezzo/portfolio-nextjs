export interface SocialLink {
  label: string
  href: string
  handle: string
}

// TODO(chandra): verify the pub.dev publisher and Medium handles — these were not
// present on the old site and are inferred. Correct them before merging to main.
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/chandrabezzo', handle: 'chandrabezzo' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chandra-abdul-fattah/',
    handle: 'chandra-abdul-fattah',
  },
  {
    label: 'pub.dev',
    href: 'https://pub.dev/publishers/solusibejo.com/packages',
    handle: 'solusibejo.com',
  },
  { label: 'Medium', href: 'https://medium.com/@chandrabezzo', handle: '@chandrabezzo' },
  { label: 'X', href: 'https://x.com/BezzoKecil', handle: '@BezzoKecil' },
]
