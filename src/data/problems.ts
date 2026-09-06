export interface Problem {
  title: string
  description: string
  /** Technologies stay attached to a problem, never a bare logo wall (brief §71). */
  stack: string
}

export const problems: Problem[] = [
  {
    title: 'Build a Mobile Product',
    description:
      'From architecture and module boundaries through implementation, API integration, and the unglamorous work of getting a build actually release-ready.',
    stack: 'Flutter · Android · iOS · REST · GraphQL',
  },
  {
    title: 'Modernize an Existing Application',
    description:
      'Codebases that grew faster than their structure. Modularization, dependency untangling, and paying down the technical debt that is actually slowing delivery — not all of it.',
    stack: 'Architecture · Modularization · Refactoring',
  },
  {
    title: 'Integrate Native Capabilities',
    description:
      'The work that starts where Dart ends: platform channels, Android and iOS SDKs, Kotlin and Swift implementations, and the lifecycle details that only surface in production.',
    stack: 'Flutter · Kotlin · Swift · Platform Channels',
  },
  {
    title: 'Build SDKs & Plugins',
    description:
      'Developer-facing libraries where the API is the product — designing a surface other engineers can use correctly without reading the source, then publishing and maintaining it.',
    stack: 'Dart · pub.dev · API Design · Versioning',
  },
  {
    title: 'Solve Difficult Production Problems',
    description:
      'Crashes that only reproduce on one OS version, performance cliffs, lifecycle and state bugs, networking edge cases. Diagnosis first, then a fix at the root rather than the symptom.',
    stack: 'Profiling · Crash Analysis · State Management',
  },
  {
    title: 'Improve Engineering Productivity',
    description:
      'Tooling, automation, and CLI workflows that shorten the loop between writing code and knowing whether it works — including where AI agents genuinely help.',
    stack: 'CLI Tooling · CI/CD · Automation',
  },
]
