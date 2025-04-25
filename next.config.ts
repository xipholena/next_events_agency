

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  webpack(config) {
    if (Array.isArray(config?.externals)) {
      config.externals.push("mysql2");
    } else {
      config.externals = ["mysql2"];
    }
    return config;
  },

}

module.exports = nextConfig