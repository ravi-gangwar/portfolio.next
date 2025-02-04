import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.pinimg.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
