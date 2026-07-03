/** @type {import('next').NextConfig} */

// Allow Replit's proxied preview origins dynamically so /_next/* assets are served.
const devOrigins = [];
if (process.env.REPLIT_DEV_DOMAIN) {
  devOrigins.push(process.env.REPLIT_DEV_DOMAIN);
}

const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: devOrigins,
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
