/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Configuración para exportación estática
  output: 'export',
  distDir: 'dist',
};

module.exports = nextConfig;
