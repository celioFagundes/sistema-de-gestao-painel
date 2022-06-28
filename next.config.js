/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: ['picsum.photos', 'dummyimage.com'],
    formats: ['image/webp']
  },

}

module.exports = nextConfig
