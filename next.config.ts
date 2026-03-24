/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // This tells Next.js to prepend /Read-It-And-Weep to all links and image src's
  basePath: "/Read-It-And-Weep",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;