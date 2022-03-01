/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

module.exports = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "impnjvrvbyrcqytveudc.supabase.in",
    ],
  },
});
