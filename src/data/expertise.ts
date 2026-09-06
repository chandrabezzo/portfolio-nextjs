export interface Expertise {
  slug: string
  title: string
  summary: string
  detail: string
  stack: string[]
}

export const expertise: Expertise[] = [
  {
    slug: 'mobile-engineering',
    title: 'Mobile Engineering',
    summary: 'Shipping and maintaining mobile products that stay maintainable under continuous change.',
    detail:
      'A decade of mobile work across native Android, React Native, and Flutter — in healthcare information systems, commerce, and consumer products. The recurring problem is rarely the first release; it is what the codebase looks like after twenty of them.',
    stack: ['Flutter', 'Android', 'iOS', 'Kotlin', 'Swift'],
  },
  {
    slug: 'flutter-engineering',
    title: 'Flutter Engineering',
    summary: 'Application architecture, state management, and performance in production Flutter apps.',
    detail:
      'Working with Flutter since around 2019, across apps built from scratch and apps inherited mid-flight. Most of the value is in module boundaries and state discipline — decisions that are cheap early and expensive later.',
    stack: ['Dart', 'Flutter', 'State Management', 'Performance'],
  },
  {
    slug: 'native-integration',
    title: 'Native Android & iOS Integration',
    summary: 'The boundary between Dart and the platform, where cross-platform stops being free.',
    detail:
      'Platform channels, native SDK wrapping, permissions, lifecycle, and background behaviour. Capabilities like screenshot detection, alternate app icons, and platform analytics have no Dart equivalent — they have to be implemented twice and reconciled once.',
    stack: ['Platform Channels', 'Kotlin', 'Swift', 'Android APIs', 'iOS APIs'],
  },
  {
    slug: 'sdk-plugin-engineering',
    title: 'SDK & Plugin Engineering',
    summary: 'Libraries where other engineers are the users, and the API surface is the product.',
    detail:
      'Over twenty published packages and upstream contributions on pub.dev. Designing for a caller you will never meet means being deliberate about naming, defaults, error surfaces, and what you refuse to expose.',
    stack: ['Dart', 'pub.dev', 'API Design', 'Semantic Versioning'],
  },
  {
    slug: 'architecture-modernization',
    title: 'Architecture & Modernization',
    summary: 'Restructuring systems that outgrew their original design.',
    detail:
      'Setting architecture on greenfield projects, and untangling it on projects that never had one. The goal is not architectural purity — it is shortening the distance between a product decision and a shipped change.',
    stack: ['Modularization', 'Clean Architecture', 'Refactoring'],
  },
  {
    slug: 'developer-tooling',
    title: 'Developer Tooling',
    summary: 'Tools that shorten the feedback loop for a whole team, not just one engineer.',
    detail:
      'CLI utilities, in-app debugging overlays, and release automation. Tools like Package Rename Plus and Analytics Debugger exist because a repeated manual step was quietly costing the team more than it appeared to.',
    stack: ['CLI', 'CI/CD', 'Automation', 'Jenkins'],
  },
  {
    slug: 'technical-consulting',
    title: 'Technical Consulting',
    summary: 'Architecture review, technical direction, and second opinions on hard decisions.',
    detail:
      'Working with teams on the decisions that are expensive to reverse: platform choice, architecture, hiring bar, and how to sequence a modernization without stopping delivery.',
    stack: ['Architecture Review', 'Technical Direction', 'Mentorship'],
  },
  {
    slug: 'ai-augmented-engineering',
    title: 'AI-Augmented Engineering',
    summary: 'Using AI agents across the engineering loop without outsourcing engineering judgment.',
    detail:
      'AI coding agents are genuinely useful for research, implementation, debugging, test writing, review, and documentation. They are not accountable for architecture, trade-offs, or correctness — that remains the engineer’s job, and treating it otherwise is how teams ship confident nonsense.',
    stack: ['AI Agents', 'Code Review', 'Automation', 'Documentation'],
  },
]
