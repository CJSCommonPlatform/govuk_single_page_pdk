// require('ts-node/register');

var helpers = require('./helpers');

module.exports.config = {
  baseUrl: 'http://localhost:3030/',

  specs: [
    helpers.root('e2e/**/*.e2e.js')
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['show-fps-counter=true']
    }
  },

  ServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar'
};