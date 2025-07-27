import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'cdn.10minuteschool.com',
      's3.ap-southeast-1.amazonaws.com',
      'storage.googleapis.com',
      'images.remotePatterns',
      'via.placeholder.com',
      '10minuteschool.com'
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
