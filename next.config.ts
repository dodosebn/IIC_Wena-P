import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: 'export', 
  //   images: {
  //   unoptimized: true, 
  // },
  env: {
    WENA_PRO_API: process.env.WENA_PRO_API,
  },
};

export default nextConfig;
