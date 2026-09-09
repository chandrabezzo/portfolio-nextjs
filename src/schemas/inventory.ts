import type { Expertise } from '../data/expertise.ts'
import type { OpenSourceProject } from '../data/open-source.ts'
import type { Project } from '../data/projects.ts'

export interface InventoryInput {
  projects: Project[]
  openSource: OpenSourceProject[]
  expertise: Expertise[]
  workSlugs: ReadonlySet<string>
  publicPaths: ReadonlySet<string>
}

export function validateInventory(input: InventoryInput): void {
  assertUniqueSlugs('projects', input.projects)
  assertUniqueSlugs('openSource', input.openSource)
  assertUniqueSlugs('expertise', input.expertise)

  for (const item of input.projects) validateLinks(`projects:${item.slug}`, item.links)

  for (const item of input.openSource) {
    validateLinks(`openSource:${item.slug}`, item.links)

    if (item.contribution || item.provenance === 'upstream-contribution') {
      if (
        !item.contribution ||
        item.provenance !== 'upstream-contribution' ||
        item.category !== 'contributions' ||
        !item.links.github
      ) {
        throw new Error(
          `openSource:${item.slug} must classify upstream work as a contribution with an upstream-contribution provenance, contributions category, and GitHub evidence`
        )
      }
    }

    if (item.provenance === 'maintained-fork' && (!item.links.github || !item.links.pubDev)) {
      throw new Error(
        `openSource:${item.slug} maintained fork must link both its source repository and published package`
      )
    }
  }

  for (const item of input.expertise) {
    for (const evidence of item.evidence ?? []) {
      const reference = `expertise:${item.slug}`
      if (evidence.href.startsWith('/work/')) {
        const slug = evidence.href.slice('/work/'.length)
        if (!input.workSlugs.has(slug)) {
          throw new Error(`${reference} references missing work slug: ${slug}`)
        }
      } else if (evidence.href.startsWith('/')) {
        if (!input.publicPaths.has(evidence.href)) {
          throw new Error(`${reference} references missing internal path: ${evidence.href}`)
        }
      } else {
        assertPublicUrl(reference, evidence.href)
      }
    }
  }
}

function assertUniqueSlugs(collection: string, items: { slug: string }[]): void {
  const seen = new Set<string>()
  for (const item of items) {
    if (seen.has(item.slug)) throw new Error(`${collection} contains duplicate slug: ${item.slug}`)
    seen.add(item.slug)
  }
}

function validateLinks(reference: string, links?: object): void {
  for (const [name, url] of Object.entries(links ?? {})) {
    if (typeof url === 'string' && url) assertPublicUrl(`${reference}.${name}`, url)
  }
}

function assertPublicUrl(reference: string, value: string): void {
  let url: URL
  try {
    url = new URL(value)
  } catch {
    throw new Error(`${reference} contains invalid URL: ${value}`)
  }
  if (url.protocol !== 'https:') {
    throw new Error(`${reference} URL must use https: ${value}`)
  }
}
