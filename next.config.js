module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com']
  },
  async rewrites() {
    return [{
      source: '/sitemap.xml',
      destination: '/api/sitemap'
    }]
  }
}
