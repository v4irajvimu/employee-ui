/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/employee/list",
        permanent: true,
      },
      {
        source: "/employee",
        destination: "/employee/list",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/men/**",
      },
    ],
  },
};

module.exports = nextConfig;
