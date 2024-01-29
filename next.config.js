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


/*⚠ Invalid next.config.js options detected: 
⚠     Unrecognized key(s) in object: 'mdx'
⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
  ▲ Next.js 14.0.1
  - Environments: .env.local

uncaughtException [Error: EPERM: operation not permitted, open 'C:\Users\amaan\OneDrive\Documents\Github\NJ\.next\trace'] {
 errno: -4048,
 code: 'EPERM',
 syscall: 'open',
 path: 'C:\\Users\\amaan\\OneDrive\\Documents\\Github\\NJ\\.next\\trace'
}
error Command failed with exit code 1.*/