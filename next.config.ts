import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  //  output: "export"

  // 性能优化配置
  compress: true,
  poweredByHeader: false,

  // 页面缓存配置
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  trailingSlash: false,

  // 图片优化配置
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 实验性功能
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'ahooks',
      '@vercel/speed-insights'
    ],
    webpackBuildWorker: true,
  },

  // Webpack 优化
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // 更细粒度的代码分割
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        // React 相关库单独打包
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
          priority: 30,
        },
        // Lucide React 图标库
        lucide: {
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          name: 'lucide',
          chunks: 'all',
          priority: 25,
        },
        // Next.js 国际化相关
        nextIntl: {
          test: /[\\/]node_modules[\\/]next-intl[\\/]/,
          name: 'next-intl',
          chunks: 'all',
          priority: 23,
        },
        // 其他工具库
        utils: {
          test: /[\\/]node_modules[\\/](ahooks|@vercel\/speed-insights)[\\/]/,
          name: 'utils',
          chunks: 'all',
          priority: 20,
        },
        // 通用 vendor
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          minChunks: 1,
        },
      };

      // 启用 tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // 模块路径解析优化
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };

    return config;
  },

  // 响应头优化
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ],
      },
      // 静态资源长期缓存
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 页面缓存配置 - 按从具体到通用的顺序排列 (全部24小时缓存)
      {
        source: '/:locale(en|zh|fr|es|ja|ko|pt|tw|de)/blog/:id*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:locale(en|zh|fr|es|ja|ko|pt|tw|de)/blog',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:locale(en|zh|fr|es|ja|ko|pt|tw|de)/:path+',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:locale(en|zh|fr|es|ja|ko|pt|tw|de)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withBundleAnalyzer(withNextIntl(nextConfig));
