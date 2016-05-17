var helpers = require('./helpers');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

var plugins = [
  new NgAnnotatePlugin(),
  new CopyWebpackPlugin([
    {
      from: {
        glob: 'src/@govuk/angularjs-components/package.json'
      },
      dot: true
    }
  ])
];

if (process.env.NODE_ENV === 'production') {
  var uglify = new webpack.optimize.UglifyJsPlugin({
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
  });
  plugins.push(uglify);
}

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
  plugins: plugins,
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  }
};