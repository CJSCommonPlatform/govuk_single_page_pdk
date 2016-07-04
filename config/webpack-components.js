var helpers = require('./helpers');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  debug: false,
  devtool: false,
  entry: {
    'angularjs-components': './src/angularjs-components.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: helpers.root('dist/@govuk/angularjs-components'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    'angular': 'angular'
  },
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: 'tslint'},
      {test: /\.js$/, loader: 'source-map'}
    ],
    loaders: [
      {test: /\.html$/, loader: 'html'},
      {test: /\.ts$/,   loader: 'awesome-typescript', exclude: [/\.(spec|e2e)\.ts$/]}
    ]
  },
  plugins: [
    new NgAnnotatePlugin()
  ],
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  }
};