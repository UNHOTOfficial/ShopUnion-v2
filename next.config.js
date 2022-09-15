/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["m.media-amazon.com", "img.freepik.com"],
  },
};

module.exports = nextConfig;
