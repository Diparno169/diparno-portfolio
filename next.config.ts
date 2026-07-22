import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  // Tree-shake barrel-file icon imports (lucide-react, react-icons) so every
  // route only ships the individual icons it actually uses instead of the
  // whole package. Same visual output, smaller per-route JS payload, which
  // means less to parse/execute on every client-side navigation.
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
