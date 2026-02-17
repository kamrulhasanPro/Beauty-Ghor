import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    removeConsole: false,
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
      new URL("https://bk.shajgoj.com/storage/2025/12/sku-11589-y5ou.jpg"),
    ],
  },
};

export default nextConfig;
