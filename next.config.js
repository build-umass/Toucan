const withCSS = require('@zeit/next-css');
const withImages = require('next-images')
module.exports = withCSS(withImages({  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  }
}));