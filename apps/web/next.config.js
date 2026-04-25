/** @type {import('next').NextConfig} */
const nextConfig = {
  // Khai báo để Next.js hiểu các package dùng chung trong Monorepo
  transpilePackages: ["@incubator/types", "@incubator/database"],
};

module.exports = nextConfig;
