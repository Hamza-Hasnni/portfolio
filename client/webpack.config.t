const path = require('path');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      crypto: false
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
