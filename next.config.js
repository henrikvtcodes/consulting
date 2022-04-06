/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { withPlausibleProxy } = require('next-plausible')


bundleAnalyze = withBundleAnalyzer({
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

module.exports = withPlausibleProxy()(bundleAnalyze)