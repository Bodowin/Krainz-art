import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mobile.krainz-art.com",
        pathname: "/wpimages/**",
      },
      {
        protocol: "https",
        hostname: "krainz-art.com",
        pathname: "/wpimages/**",
      },
    ],
  },
};

export default nextConfig;
