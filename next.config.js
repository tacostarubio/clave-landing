/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Prevent constant recompilation
      config.watchOptions = {
        poll: false,
        ignored: ['**/.git/**', '**/node_modules/**', '**/.next/**', '**/dist/**'],
        aggregateTimeout: 300
      };
    }
    return config;
  }
};

module.exports = nextConfig; 