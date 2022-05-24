/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  images: {
    domains: ['www.zoomila.com'],
  },
  experimental:{
    outputStandalone:true
  },
  reactStrictMode: true,
  assetPrefix: process.env.ASSET_PREFIX,
  webpack(config, { dev }) {
    // modify it!
    return config
  }
}
module.exports = withBundleAnalyzer(nextConfig)
