/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // No distDir override: build artifacts go to .next, the static export to out/.
  // Pointing distDir at 'out' makes `next dev` overwrite the exported site.
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
