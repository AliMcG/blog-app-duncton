/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // to use images from an external source the url needs to be added here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'foodanddrink.scotsman.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  }
}


module.exports = nextConfig
