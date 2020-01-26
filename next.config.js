const composePlugins = require('next-compose-plugins');
const emoji = require('remark-emoji');
const path = require('path');
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [emoji],
  },
});
const withOffline = require('next-offline');

module.exports = composePlugins([withMDX, withOffline], {
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/images'),
    };
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[hash:6].[ext]',
          },
        },
      ],
    });
    return config;
  },
});
