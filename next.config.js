/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
    // loader: "cloudinary",
    // path: "http://res.cloudinary.com/dwbgu2shb/image/upload/",
  },
};

module.exports = nextConfig;
