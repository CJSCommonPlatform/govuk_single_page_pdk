var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  debug: false,
  devtool: 'source-map',
  output: {
    path: helpers.root('dist/govuk_single_page_pdk'),
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].map',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/govuk_single_page_pdk/'
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
    new HtmlWebpackPlugin({
      template:  'src/docs/index.ejs',
      chunks:   ['index', 'main'],
      baseUrl:   '/govuk_single_page_pdk/'
    })
  ],
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  },
  htmlLoader: {
    minimize: false,
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