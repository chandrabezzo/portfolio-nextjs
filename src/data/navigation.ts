import { ui, type L10n } from '@/lib/i18n'
import { profile } from '@/data/profile'

export interface NavItem {
  label: L10n
  href: string
  /** Insights points at Medium rather than an on-site article archive. */
  external?: boolean
}

export const navigation: NavItem[] = [
  { label: ui.navWork, href: '/work' },
  { label: ui.navExpertise, href: '/expertise' },
  { label: ui.navOpenSource, href: '/open-source' },
  { label: ui.navInsights, href: profile.mediumUrl, external: true },
  { label: ui.navAbout, href: '/about' },
]

export const primaryCta = { label: ui.ctaDiscuss, href: '/contact' }
