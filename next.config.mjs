/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hazpdcnwfauaoahrfvbf.supabase.co/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
