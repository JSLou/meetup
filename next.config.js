const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias['@components'] = path.join(
      __dirname,
      'components/index.js',
    );
    return config;
  },
});
