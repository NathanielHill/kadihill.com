const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.modules = [
      path.resolve('./src'),
      path.resolve('./public'),
      'node_modules'
    ]
    return config
  }
}
