export interface Testimonial {
  quote: string
  author: string
  title: string
  /**
   * TRUE = this is not a real recommendation. Placeholders exist only so the
   * section design can be reviewed; `assertNoPlaceholders()` in src/lib/content.ts
   * warns on every build while any remain.
   *
   * Replace with real LinkedIn recommendations (with permission) before merging
   * to main. Attribution is deliberately fictional — a site whose whole argument
   * is verifiable proof must not put invented words in a real person's mouth.
   */
  placeholder?: boolean
}

// TODO(chandra): replace all three with real recommendations, then delete the
// `placeholder` flags. Do not merge to main with placeholders present.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Placeholder text. Replace with a real recommendation that speaks to technical leadership — how architectural decisions were made and why the team trusted them.',
    author: 'Placeholder Name',
    title: 'Engineering Manager — replace with real attribution',
    placeholder: true,
  },
  {
    quote:
      'Placeholder text. Replace with a real recommendation about problem solving — a specific production problem that was diagnosed and fixed at the root.',
    author: 'Placeholder Name',
    title: 'Product Owner — replace with real attribution',
    placeholder: true,
  },
  {
    quote:
      'Placeholder text. Replace with a real recommendation about mentorship and delivery — the effect on other engineers, not just on the codebase.',
    author: 'Placeholder Name',
    title: 'Senior Engineer — replace with real attribution',
    placeholder: true,
  },
]

// Build-time guard: keeps the placeholder problem visible in every build log
// until real recommendations replace these. Deliberately a warning, not an
// error, so the branch stays runnable while Chandra collects the real quotes.
const placeholderCount = testimonials.filter((t) => t.placeholder).length
if (placeholderCount > 0) {
  console.warn(
    `\n  ⚠  ${placeholderCount} placeholder testimonial(s) present in src/data/testimonials.ts.` +
      `\n     Replace with real recommendations before merging to main.\n`,
  )
}
