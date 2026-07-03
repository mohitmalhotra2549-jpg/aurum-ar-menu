/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required for Replit's proxied preview
  allowedDevOrigins: ["*"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Model files can be large — make sure static assets in /public are served as-is.
  async headers() {
    return [
      {
        source: "/models/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
