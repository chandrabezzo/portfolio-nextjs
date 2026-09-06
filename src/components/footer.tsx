import Link from 'next/link'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social-links'
import { navigation } from '@/data/navigation'
import { Container } from '@/components/ui/primitives'

export function Footer() {
  return (
    <footer className="on-deep border-t border-deep-line bg-deep py-16 text-deep-ink">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl">{profile.name}</p>
            <p className="mt-1 text-sm text-deep-muted">{profile.role}</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-deep-muted">
              {profile.brand} — {profile.brandLine}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Site</p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-deep-muted hover:text-deep-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/archive" className="text-sm text-deep-muted hover:text-deep-ink">
                  Archive
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-deep-muted hover:text-deep-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-deep-muted hover:text-deep-ink"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-deep-line pt-6">
          <p className="font-mono text-xs text-deep-muted">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </div>
      </Container>
    </footer>
  )
}
