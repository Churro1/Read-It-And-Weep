import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "accelerometer=(), camera=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:; frame-src https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://youtube-nocookie.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
