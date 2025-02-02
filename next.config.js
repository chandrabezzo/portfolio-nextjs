/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Custom domain configuration
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/portfolio-nextjs' : '' // Empty for custom domain
const assetPrefix = isProd ? '/portfolio-nextjs/' : '' // Empty for custom domain

const nextConfig = {
  output: 'export',
  distDir: 'out',
  // Base configuration
  basePath,
  assetPrefix,
  tralingSlash: true,

  // Image settings for static export
  images: {
    unoptimized: true,
  },

  // Optimization settings
  swcMinify: true,
  reactStrictMode: true,

  // Production optimizations
  compiler: {
    removeConsole: isProd ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Asset handling
    config.module.rules.push({
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
        publicPath: `${assetPrefix}/_next/`,
      },
    })

    // Production optimizations
    if (isProd && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          cacheGroups: {
            defaultVendors: {
              test: /[\/]node_modules[\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    return config
  },
}

// Apply bundle analyzer wrapper
module.exports = withBundleAnalyzer(nextConfig)
