/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
