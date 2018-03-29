const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './lib/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  stats: {
    colors: true
  },
  mode: 'development',
  devtool: 'source-map',
};
