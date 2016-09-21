'use strict';

function testedPages() {

  var savedPagesPromise = browser.executeScript('return window.flushSavedPages ? window.flushSavedPages() : []');

  return savedPagesPromise.then((savedPages) => {
    if (savedPages.length > 0) {

      // Kept for global access on completion of all TESTS(specs)
      global.savedPages = global.savedPages.concat(savedPages);
    }
  });
}

module.exports = {
  testedPages
};
