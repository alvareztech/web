module.exports = {
  staticPageGenerationTimeout: 3000,
  experimental: { appDir: true },
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com', 'play.google.com']
  },
  async rewrites() {
    return [{
      source: '/sitemap.xml',
      destination: '/api/sitemap'
    }]
  }
}
