var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var webpack = require('webpack');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  debug: false,
  devtool: 'source-map',
  output: {
    path: helpers.root('dist/docs'),
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].map',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    loaders: [
      {test: /\.css$/,  loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!postcss!resolve-url!sass?sourceMap'}
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new NgAnnotatePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false,
      mangle: {
        screw_ie8 : true,
        keep_fnames: true
      }
    }),
    // new ExtractText('main.[hash].css', {allChunks: true})
  ],
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  },
  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  }
});