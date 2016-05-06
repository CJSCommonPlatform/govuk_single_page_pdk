var webpack = require('webpack');
var helpers = require('./helpers');
var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src')
  },
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: 'tslint', exclude: [helpers.root('node_modules')]},
      {test: /\.js$/, loader: 'source-map'}
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript',
        query: {
          compilerOptions: {
            // Remove TypeScript helpers to be injected
            // below by DefinePlugin
            removeComments: true
          }
        },
        exclude: [/\.e2e\.ts$/]
      },
      {test: /\.scss$/, loader: 'raw!css!postcss!sass'},
      {test: /\.html$/, loader: 'html', exclude: [helpers.root('src/index.html')] },
      {test: /\.json$/, loader: 'json'},
      {test: /\.yaml$/, loader: 'json!yaml'},
      {test: /\.(jpg|jpeg|gif|png)$/, loader:'url?limit=1024&name=images/[name].[ext]'},
      {test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=1024&name=fonts/[name].[ext]'}
    ],
    postLoaders: [{
      test: /\.(js|ts)$/, loader: 'istanbul-instrumenter',
      include: helpers.root('src'),
      exclude: [
        /\.(e2e|spec)\.ts$/,
        /node_modules/
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'HMR': false,
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
        'HMR': false,
      }
    })
  ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  }
};
