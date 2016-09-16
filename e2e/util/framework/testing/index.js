'use strict';

module.exports = {
  registerExtensions: () => require('./delayedWaitForAngular').register(),
  saveTestedPages: () => require('./testedPages').testedPages()
};
