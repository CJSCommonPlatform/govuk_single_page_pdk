/* eslint-disable no-multi-spaces */

'use strict';

module.exports = {

  toBeLoaded: () => ({
    compare: page => {
      page.waitUntilLoaded();
      const ret = {
        pass: browser.getCurrentUrl().then(absoluteUrl => {
          const url = absoluteUrl.split('#')[1];

          ret.message = `Expected url to be '${page.url}'. Got ${url}`;

          return url === page.url;
        })
      };
      return ret;
    }
  })
};