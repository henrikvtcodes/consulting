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
  async rewrites() {
      return [
          {
              source: '/static/js/umami.js',
              destination: 'https://analytics.henriktech.com'
          },
          {
              source: '/static/api/collect',
              destination: 'https://analytics.henriktech.com/api/collect'
          }
      ];
  },
});

module.exports = withPlausibleProxy({
  subdirectory:"static",
  scriptName: "privacy",
  customDomain: 'https://plausible.henriktech.com',
})(bundleAnalyze)