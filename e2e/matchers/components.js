/* eslint-disable no-multi-spaces */

'use strict';

module.exports = {

  toHaveDateInput: () => ({
    compare: (element, expectedDate) => {
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);
      const ret = {
        pass: protractor.promise.all([
          element.$('[name=dateDay]').getAttribute('value'),
          element.$(`[name=dateMonth]`).getAttribute('value'),
          element.$(`[name=dateYear]`).getAttribute('value')
        ]).then(results => {
          const day   = results[0];
          const month = results[1];
          const year  = results[2];
          const parts = expectedDate.split(`-`);

          ret.message = `Expected '${year}-${month}-${day}' to equal ${expectedDate}`;

          return year === parts[0] && month === parts[1] && day === parts[2];
        })
      };
      return ret;
    }
  }),

  toBeActiveTopMenuLink:() => ({
    compare: element => {
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);
      return {
        pass: element.getAttribute('class').then(class_ => {
          return class_.indexOf('top-menu__link--active') >= 0;
        }),
        message: `Element failed toBeActiveTopMenuLink expectation.`
      };
    }
  })
};