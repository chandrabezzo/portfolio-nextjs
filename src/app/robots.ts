import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

/**
 * Search crawlers and AI/answer-engine crawlers are both allowed explicitly.
 * Naming them individually is what makes the intent unambiguous — a bare
 * `User-agent: *` leaves several of these ambiguous in practice.
 */
const AI_AGENTS = [
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // ChatGPT browsing on a user's behalf
  'GPTBot', // OpenAI crawler
  'ClaudeBot', // Anthropic
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini / Vertex grounding
  'Applebot-Extended',
  'Bingbot',
  'DuckDuckBot',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
