/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  mdx: {
    useDynamicImport: true,
  },
};

module.exports = nextConfig


