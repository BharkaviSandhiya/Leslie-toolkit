// webpack.config.js
const path = require('path');

module.exports = {
  // Other webpack configuration...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          // Paths to ignore
          path.resolve(__dirname, 'node_modules/boxicons')
        ]
      }
    ]
  },
  // Other webpack configuration...
};
