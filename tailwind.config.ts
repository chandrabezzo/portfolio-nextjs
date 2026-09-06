import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ground: 'var(--ground)',
        surface: 'var(--surface)',
        raised: 'var(--raised)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        'ink-subtle': 'var(--ink-subtle)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-wash': 'var(--accent-wash)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        deep: 'var(--deep)',
        'deep-ink': 'var(--deep-ink)',
        'deep-muted': 'var(--deep-muted)',
        'deep-line': 'var(--deep-line)',
        'deep-accent': 'var(--deep-accent)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 1.9rem + 3.6vw, 5rem)', { lineHeight: '1.04', letterSpacing: '-0.028em' }],
        'display-lg': ['clamp(2.25rem, 1.6rem + 2.7vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.024em' }],
        'display-md': ['clamp(1.75rem, 1.35rem + 1.7vw, 2.75rem)', { lineHeight: '1.14', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.375rem, 1.15rem + 0.95vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        prose: '68ch',
        container: '76rem',
        narrow: '46rem',
      },
      transitionDuration: { DEFAULT: '160ms' },
    },
  },
  plugins: [typography],
}

export default config
