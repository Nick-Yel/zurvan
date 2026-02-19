import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized images for dynamic user uploads
    unoptimized: true,
    // Support loading images from the API endpoint
    domains: ["localhost", "127.0.0.1"],
  },
};

export default nextConfig;
