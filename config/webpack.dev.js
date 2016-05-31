
var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },
  devServer: {
    host: 'localhost',
    port: 9030,
    stats: 'minimal',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});
