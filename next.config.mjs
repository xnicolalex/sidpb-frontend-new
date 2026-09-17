const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/sidpb",
  trailingSlash: true,

  allowedDevOrigins: [
    "http://192.168.200.182:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "192.168.200.182",
    "localhost",
    "127.0.0.1",
  ],
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

if (basePath) {
  nextConfig.basePath = basePath;
}

export default nextConfig;