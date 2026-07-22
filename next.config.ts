import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  serverExternalPackages: ["payload", "@payloadcms/db-sqlite", "@payloadcms/drizzle"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withPayload(nextConfig);
