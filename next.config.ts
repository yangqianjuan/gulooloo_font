import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withSitemap = require("next-sitemap");

const nextConfig: NextConfig = {
  ...withSitemap,
  //  output: "export"
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
