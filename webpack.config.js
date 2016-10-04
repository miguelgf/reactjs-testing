ck = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
      {
        test : /\.jsx?$/,
        exclude: /node_modules/,
        loader : 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs']
        }
      }
  	]
  }
}

module.exports = config;