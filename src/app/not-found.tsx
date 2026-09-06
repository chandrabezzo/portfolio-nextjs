import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Section label="Page not found">
      <Container narrow>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 font-display text-display-lg">This page does not exist.</h1>
        <p className="mt-6 leading-relaxed text-ink-muted">
          The link may be out of date. The work, open-source, and insights sections are the best
          places to start.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/work">Selected work</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
