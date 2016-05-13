var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var webpack = require('webpack');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  debug: false,
  devtool: false,
  entry: {
    'ng': './src/@govuk/angularjs-components/angularjs-components.ts'
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].map',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    loaders: [
      {test: /\.css$/,  loader: ExtractText.extract('css')},
      {test: /\.scss$/, loader: ExtractText.extract('css!postcss!sass')}
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new NgAnnotatePlugin(),
    new ExtractText('main.[hash].css', {allChunks: true})
  ],
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  }
});