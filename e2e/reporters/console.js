'use strict';

const chalk = require('chalk');

module.exports = {
  /**
   * dump the browser's console for any spec that fails
   */
  specDone: result => {
    if (result.failedExpectations.length > 0) {
      browser.manage().logs().get('browser').then(browserLog => {
        if (browserLog.length > 0) {
          browserLog.forEach(log => console.log(`${chalk.red(log.message)}\n`));
        }
      });
    }
  }
};