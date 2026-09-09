import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { expertise } from '../src/data/expertise.ts'
import { openSource } from '../src/data/open-source.ts'
import { projects } from '../src/data/projects.ts'
import { validateInventory } from '../src/schemas/inventory.ts'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = join(scriptDirectory, '..')
const workDirectory = join(repositoryRoot, 'src', 'content', 'en', 'work')
const workSlugs = new Set(
  readdirSync(workDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
)

validateInventory({
  projects,
  openSource,
  expertise,
  workSlugs,
  publicPaths: new Set(['/', '/about', '/archive', '/contact', '/expertise', '/open-source', '/work']),
})

console.log(
  `Inventory verified: ${projects.length} projects, ${openSource.length} open-source entries, ${expertise.length} expertise areas.`
)
