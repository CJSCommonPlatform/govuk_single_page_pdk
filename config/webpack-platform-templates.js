var helpers = require('./helpers');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var ExtractText = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  debug: false,
  devtool: false,
  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: helpers.root('dist/@govuk/platform-template'),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html', exclude: [helpers.root('src/index.html')]},
      {test: /\.css$/,  loader: ExtractText.extract('css')},
      {test: /\.scss$/, loader: ExtractText.extract('css!postcss!resolve-url!sass')},
      {test: /\.(jpg,jpeg,gif,png)$/, loader:'file?name=images/[name].[ext]'},
      {test: /\.(woff,woff2,eot,ttf,svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=1024&name=fonts/[name].[ext]'}
    ]
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new ExtractText('platform-templates.css', {allChunks: true}),
    new CopyWebpackPlugin([
      {
        from: '**/*.{png,svg,ico,jpg,jpeg,woff,woff2,eot,ttf,svg,scss}',
        dot: true,
        context: helpers.root('src'),
        ignore: [
          'docs/**',
          'util/**'
        ]
      },
      {
        from: 'src/@govuk/platform-template/package.json',
        dot: true
      }
    ])
  ]
};