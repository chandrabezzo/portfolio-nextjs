export interface ApproachStep {
  step: string
  title: string
  description: string
}

/** Brief §35: the AI-augmented engineering loop. */
export const approach: ApproachStep[] = [
  {
    step: '01',
    title: 'Explore',
    description:
      'Understand the system as it actually is — not as the documentation describes it. Read the code, trace the real flow, reproduce the problem.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Decide what to build and, more importantly, what not to. Name the trade-offs explicitly so they can be argued with.',
  },
  {
    step: '03',
    title: 'Implement',
    description:
      'Write the smallest change that solves the real problem, in the style of the code around it.',
  },
  {
    step: '04',
    title: 'Test',
    description:
      'Prove it works, and prove it keeps working. Coverage where it earns its keep, not everywhere.',
  },
  {
    step: '05',
    title: 'Review',
    description:
      'Adversarial reading of the diff — mine or an agent’s. Accountability for correctness does not transfer to a tool.',
  },
  {
    step: '06',
    title: 'Ship',
    description: 'Release readiness, rollout, and knowing what signal says it went wrong.',
  },
  {
    step: '07',
    title: 'Learn',
    description:
      'Feed what the production system taught back into the architecture and the tooling.',
  },
]
