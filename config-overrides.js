const path = require('path')

module.exports = (config) => {
  config.resolve = {
    alias: {
      '@atoms': path.resolve(__dirname, 'src', 'components', 'atoms'),
      '@enums': path.resolve(__dirname, 'src', 'data', 'enums'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
      '@molecules': path.resolve(__dirname, 'src', 'components', 'molecules'),
      '@organisms': path.resolve(__dirname, 'src', 'components', 'organisms'),
      '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
      '@public': path.resolve(__dirname, 'public'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@templates': path.resolve(__dirname, 'src', 'components', 'templates'),
      '@theme': path.resolve(__dirname, 'src', 'components', 'themes', 'default'),
    }
  }
  return config
}