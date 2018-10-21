const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const emoji = require('remark-emoji')
const nextOffline = require('next-offline')
const path = require('path')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: { mdPlugins: [emoji] }
})
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    [nextOffline, ['!', PHASE_DEVELOPMENT_SERVER]],
    [withMDX]
  ],
  {
    webpack: config => {
      config.resolve.modules = [
        path.resolve('./src'),
        path.resolve('./public'),
        'node_modules'
      ]
      return config
    },
    pageExtensions: ['js', 'mdx']
  }
)
