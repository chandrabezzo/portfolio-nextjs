/** Stable across server and client — no locale drift in the static export. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d))).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
