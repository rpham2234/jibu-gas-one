/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
      },
      {
        protocol: "https",
        hostname: "jibuco.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      }
    ],
  },
};

export default nextConfig;
