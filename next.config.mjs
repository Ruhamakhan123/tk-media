/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fkhi2-2.fna.fbcdn.net",
      },
    ],
    domains: ["assets.aceternity.com"], // Add the domain here
  },
};

export default nextConfig;
