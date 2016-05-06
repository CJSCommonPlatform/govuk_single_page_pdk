
module.exports = function(config) {

  config.set({
    frameworks: ['jasmine-jquery', 'jasmine', 'sinon', 'jasmine-sinon'],
    exclude: [],
    files: [
      {pattern: './config/spec-bundle.js'}
    ],
    preprocessors: {
      './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    },
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'json'},
        {type: 'html'}
      ]
    },
    webpack: require('./webpack.test.js'),
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true
  });
};