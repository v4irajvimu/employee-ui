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
};

module.exports = nextConfig;
