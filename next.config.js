/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
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

module.exports = nextConfig
