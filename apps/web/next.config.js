/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy({
  subdirectory: "static",
  scriptName: "privacy",
  customDomain: "https://plausible.henriktech.com",
})({
  swcMinify: true,
  reactStrictMode: true,
  // distDir: process.env.NODE_ENV !== "production" ? "../../.next" : ".next",
  distDir: ".next",
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
        source: "/static/js/views.js",
        destination: "https://analytics.henriktech.com/umami.js",
      },
      {
        source: "/proxy/views/api/collect",
        destination: "https://analytics.henriktech.com/api/collect",
      },
    ];
  },
});
