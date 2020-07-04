const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: {
    'Nav_Bar': path.join(__dirname, 'Nav_Bar', 'client', 'src', 'index.jsx'),
    'Product_Info': path.join(__dirname, 'Product_Info', 'client', 'src', 'index.jsx'),
    'Full_Look': path.join(__dirname, 'Full_Look', 'client', 'src', 'index.jsx'),
    'Reviews': path.join(__dirname, 'Reviews', 'client', 'src', 'index.jsx')
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
          presets: ['react', 'es2015'],
          plugins: ["babel-plugin-transform-object-rest-spread"],
        },
        include: [
          path.join(__dirname, 'Nav_Bar', 'client', 'src'),
          path.join(__dirname, 'Product_Info', 'client', 'src'),
          path.join(__dirname, 'Full_Look', 'client', 'src'),
          path.join(__dirname, 'Reviews', 'client', 'src')
        ]
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
