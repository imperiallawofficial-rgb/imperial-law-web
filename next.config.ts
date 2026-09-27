import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/",
        permanent: false, // ឬ true បើចង់បង្វែរជាអចិន្ត្រៃយ៍
      },
    ];
  },
};

export default nextConfig;