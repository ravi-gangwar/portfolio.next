import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.pinimg.com',
        protocol: 'https',
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https"
      }, 
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
