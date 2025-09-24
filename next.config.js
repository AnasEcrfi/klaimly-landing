/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect settings
  async redirects() {
    return [
      // Redirect index.html to /
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Redirect index.php to /
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Image optimization
  images: {
    domains: ['klaimly.de', 'cdn.prod.website-files.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig