import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "imgs.search.brave.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "media.licdn.com",
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
