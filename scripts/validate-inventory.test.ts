import assert from 'node:assert/strict'
import test from 'node:test'
import { validateInventory, type InventoryInput } from '../src/schemas/inventory.ts'

function validInventory(): InventoryInput {
  return {
    projects: [
      {
        slug: 'product',
        title: 'Product',
        summary: { en: 'Summary', id: 'Ringkasan' },
        type: 'product',
        technologies: ['Flutter'],
        featured: true,
        links: { website: 'https://example.com' },
      },
    ],
    openSource: [
      {
        slug: 'package',
        title: 'Package',
        summary: { en: 'Summary', id: 'Ringkasan' },
        category: 'plugins',
        technologies: ['Dart'],
        year: 2026,
        madeAt: 'Solusi Bejo',
        featured: true,
        links: { pubDev: 'https://pub.dev/packages/example' },
      },
    ],
    expertise: [
      {
        slug: 'mobile',
        title: { en: 'Mobile', id: 'Mobile' },
        summary: { en: 'Summary', id: 'Ringkasan' },
        detail: { en: 'Detail', id: 'Detail' },
        stack: ['Flutter'],
        evidence: [{ label: { en: 'Work', id: 'Karya' }, href: '/work/case-study' }],
      },
    ],
    workSlugs: new Set(['case-study']),
    publicPaths: new Set(['/about']),
  }
}

test('accepts the current inventory contract', () => {
  assert.doesNotThrow(() => validateInventory(validInventory()))
})

test('rejects duplicate slugs', () => {
  const input = validInventory()
  input.projects.push({ ...input.projects[0]! })
  assert.throws(() => validateInventory(input), /projects contains duplicate slug: product/)
})

test('rejects invalid or insecure URLs', () => {
  const input = validInventory()
  input.projects[0]!.links = { website: 'http://example.com' }
  assert.throws(() => validateInventory(input), /URL must use https/)
})

test('rejects missing internal references', () => {
  const input = validInventory()
  input.expertise[0]!.evidence = [
    { label: { en: 'Missing', id: 'Hilang' }, href: '/work/missing' },
  ]
  assert.throws(() => validateInventory(input), /references missing work slug: missing/)
})

test('keeps upstream contributions distinct from publisher packages', () => {
  const input = validInventory()
  input.openSource[0] = {
    ...input.openSource[0]!,
    contribution: true,
    category: 'plugins',
    provenance: undefined,
    links: { github: 'https://github.com/example/project' },
  }
  assert.throws(() => validateInventory(input), /must classify upstream work as a contribution/)
})

test('requires evidence for a maintained fork', () => {
  const input = validInventory()
  input.openSource[0] = {
    ...input.openSource[0]!,
    provenance: 'maintained-fork',
    links: { github: 'https://github.com/example/fork' },
  }
  assert.throws(() => validateInventory(input), /maintained fork must link both/)
})
