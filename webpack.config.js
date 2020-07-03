const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: {
    'Nav_Bar': path.join(__dirname, 'Nav_Bar', 'client', 'src', 'index.jsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
