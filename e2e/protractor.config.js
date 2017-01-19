'use strict';

var Jasmine2HtmlReporter  = require('protractor-jasmine2-html-reporter');
var reporters             = require('jasmine-reporters');
var matchers              = require('./matchers');
var SpecReporter          = require('jasmine-spec-reporter');
var proxy                 = process.env.proxy === 'true' || false;
var req                   = require('./util/request');
var testing               = require('./util/framework/testing');
var fs                    = require('fs');
var path                  = require('path');
var mkdir                 = require('mkdirp');
var Q                     = require('q');
var protractorReportPath  = require('../gulp.config').protractorReportPath;

var config = {

  directConnect: false,

  capabilities: {

    'browserName': 'chrome',

    'chromeOptions': {
      args: ['--disable-web-security']
    },
  },

  allScriptsTimeout: 30000,

  getPageTimeout: 29000,

  framework: 'jasmine',

  specs: [
      'e2e/specs/**/*.spec.js'
  ],

  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    displayStacktrace: true,
    displaySpecDuration: true,
    defaultTimeoutInterval: 50000,
    includeStackTrace: true,
    print: function () { }
  },

  baseUrl: 'http://localhost:9019/#/',

  /*
   * Config is available at runtime via browser.params.[params-key]
   */
  params: {

  },

  plugins: [{
    package: 'protractor-console'
  }],

  onPrepare: function () {
    if (proxy) {
      req.setProxy(browser.params.proxy.httpProxy);
    }
    req.setTimeout(15000);
    req.setCJSCPPUID(browser.params.cjscppuid);
    req.setBaseUrl(browser.params.apiUrl);

    browser.driver.manage().window().setSize(1200, 1000);

    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));

    if (browser.params.screenshots) {
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: protractorReportPath + '/screenshots/',
        screenshotsFolder: 'images',
        filePrefix: 'views-snapshot'
      }));
    }

    jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
      savePath: protractorReportPath + '/xml',
      consolidateAll: true
    }));

    testing.registerExtensions();

    beforeEach(() => { jasmine.addMatchers(matchers); });
    afterEach(() => { testing.saveTestedPages(); });
  },

  onComplete: function () {

    // TODO: Shouldn't hard-code the outputDirectory path
    var outputDirectory = path.join(protractorReportPath, '/page-sources/');
    var writeFile = Q.denodeify(fs.writeFile);

    mkdir.sync(outputDirectory);

    Q.all(global.savedPages.map(savedPage)).then(() => {
      console.log('\nAll processed pages saved to ', outputDirectory);
    });

    function savedPage(page) {
      var outputPath = outputDirectory + getUniqueFilename(page.url);

      writeFile(outputPath, processPage(page.source), 'utf8');
    }

    function processPage(pageSrc) {
      try {
        return pageSrc
          .replace(/href="styles/g, 'href="/dist/styles')
          .replace(/href="\/assets/g, 'href="/dist/assets')
          .replace(/<script[^<]*<\/script>/g, '');
      }
      catch (error) {
        throw new Error('Page Manipulation Problem');
      }
    }

    function getUniqueFilename(pageUrl) {
      return pageUrl.replace(/[\/#%]/g, '_') + '___' + Math.floor(Math.random() * 10000000) + ".html";
    };
  }
};

module.exports.config = config;