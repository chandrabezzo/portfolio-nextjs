/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // No distDir override: build artifacts go to .next, the static export to out/.
  // Pointing distDir at 'out' makes `next dev` overwrite the exported site.
  // Next 15's dev export check throws a 500 for unknown dynamic slugs before
  // its 404 handler can run. Export is needed only for the production build.
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  // The EN/ID route groups have independent roots; the 404 renders a full document.
  experimental: { globalNotFound: true },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
