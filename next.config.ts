import type { NextConfig } from "next";
import path from "path";

const repo = "seong-portfolio";
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: path.join(__dirname),
  },
  agentRules: false,
};

export default nextConfig;
