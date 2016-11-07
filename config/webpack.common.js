var webpack = require('webpack');
var rucksack = require('rucksack-css');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    'index': './src/docs/vendor.ts',
    'main':   './src/docs/index.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src/docs'),
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: "tslint-loader"},
      {test: /\.js$/, loader: 'source-map-loader'}
    ],
    loaders: [
      {test: /\.ts$/,   loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/]},
      {test: /\.css$/,  loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.html$/, loader: 'html-loader', exclude: [helpers.root('src/index.html')]},
      {test: /\.(jpg|jpeg|gif|png)$/, loader: 'url?limit=1&name=assets/images/[name].[ext]'},
      {test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=1&name=assets/fonts/[name].[ext]'}
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
      ,'node_modules/govuk-elements-sass/public/sass',
      ,'src/assets'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          IS_PA11Y: !!process.env.IS_PA11Y
        }
      }
    }),
    new ForkCheckerPlugin(),
    new CopyWebpackPlugin([
      {
        context: './src',
        from: 'assets/**'
      },
      {
        context: './node_modules/govuk_template_mustache',
        from: 'assets/stylesheets/**'
      },
      {
        context: './node_modules/govuk_template_mustache',
        from: 'assets/images/**'
      },
      {
        context: './node_modules/govuk_frontend_toolkit',
        from: 'images/**',
        to: 'assets/'
      }
    ]),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: 'index'})
  ]
};