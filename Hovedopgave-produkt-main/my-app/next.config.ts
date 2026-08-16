import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 allowedDevOrigins: ['192.168.0.100'],

  async redirects() {
    return [
      {
        source: '/',
        destination: '/frontpage',
        permanent: true,
      },
    ]
  },


};

export default nextConfig;

