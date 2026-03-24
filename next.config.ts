import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // This hardcodes the prefix for GitHub Pages
  basePath: "/Read-It-And-Weep",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;