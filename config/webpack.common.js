var webpack = require('webpack');
var rucksack = require('rucksack-css');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    'vendor': './src/docs/vendor.ts',
    'main':   './src/docs/index.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src/docs'),
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: "tslint"},
      {test: /\.js$/, loader: 'source-map'}
    ],
    loaders: [
      {test: /\.ts$/,   loader: 'awesome-typescript', exclude: [/\.(spec|e2e)\.ts$/]},
      {test: /\.css$/,  loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!postcss!sass'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.html$/, loader: 'html', exclude: [helpers.root('src/index.html')]},
      {test: /\.(jpg|jpeg|gif|png)$/, loader: 'url?limit=1024&name=assets/images/[name].[ext]'},
      {test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=1024&name=assets/fonts/[name].[ext]'}
    ]
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  sassLoader: {
    includePaths: [
      helpers.root('node_modules/govuk_frontend_toolkit/stylesheets')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
      }
    }),
    new ForkCheckerPlugin(),
    new CopyWebpackPlugin([
      {
        context: './src',
        from: 'assets/**'
      }
    ]),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ]
};