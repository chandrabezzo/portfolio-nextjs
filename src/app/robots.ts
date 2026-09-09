import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

/**
 * Preserve the existing allow policy. The wildcard covers other crawlers.
 * Search and model training are independent choices; allowing a bot does not
 * guarantee indexing. https://developers.openai.com/api/docs/bots
 */
const AI_AGENTS = [
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // ChatGPT browsing on a user's behalf
  'GPTBot', // Model training, independent of ChatGPT search
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
      ...AI_AGENTS.map(userAgent => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
