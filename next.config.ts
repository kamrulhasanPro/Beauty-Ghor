import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "https://i.postimg.cc",
      //   // port: "",
      //   pathname: "https://i.postimg.cc/**",
      // },
      new URL("https://i.postimg.cc/**"),
    ],
  },
};

export default nextConfig;
