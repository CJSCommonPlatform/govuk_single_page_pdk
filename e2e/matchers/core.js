/* eslint-disable no-multi-spaces */

'use strict';


module.exports = {

  toBeDisabled: () => ({
    compare: element => {
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);
      return {
        pass: element.getAttribute('disabled'),
        message: `Element failed disabled expectation.`
      };
    }
  }),

  toBeEmpty: () => ({
    compare: element => {
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);
      const ret = {
        pass: element.getAttribute('data-ng-model')
          .then(ngModel => element.evaluate(ngModel))
          .then(value => {
            const valid = !value;

            ret.message = `Expected empty input. Instead got ${value}`;

            return valid;
          })
      };
      return ret;
    }
  }),

  toBeHeading: () => ({
    compare: (expectedText, strict) => {
      const element = $('h1');
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);

      const ret = {
        pass: element.getText().then(text => {
          let valid;

          if (strict) {
            valid = text === expectedText;
            ret.message = `Expected page to equal '${expectedText}'. Got '${text}'.`;
          } else {
            valid = text.toLowerCase().indexOf(expectedText.toLowerCase()) > -1;
            ret.message = `Expected page heading of '${text}' to contain '${expectedText}'.`;
          }
          return valid;
        })
      };
      return ret;
    }
  }),

  toBePresent: () => ({
    compare: element => {
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);
      return  {
        pass: element.isPresent(),
        message: `Expected element to be present.`
      };
    }
  }),

  toBeVisible: () => ({
    compare: element => {
      return  {
        pass: element.isPresent().then(present => {
          if (present) {
            return element.isDisplayed();
          }
          return false;
        }),
        message: `Incorrect element visibility.`
      };
    }
  }),

  toContainText: () => ({
    compare: (element, expectedText, strict) => {
      expectedText = String(expectedText);
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);

      const ret = {
        pass: element.getText().then(text => {
          let valid;

          if (strict) {
            valid = text.indexOf(expectedText) > -1;
          } else {
            valid = text.toLowerCase().indexOf(expectedText.toLowerCase()) > -1;
          }

          ret.message = `Expected element to contain '${expectedText}'.\nGot '${text}'`;

          return valid;
        })
      };
      return ret;
    }
  }),

  toHaveInput: () => ({
    compare: (element, expectedInput) => {
      protractor.ExpectedConditions.visibilityOf(element, browser.params.ecTimeout);
      const ret = {
        pass: element.getAttribute('value').then(input => {
          const valid = input.indexOf(expectedInput) > -1;

          ret.message = `Expected '${input}' to have input '${expectedInput}'`;

          return valid;
        })
      };
      return ret;
    }
  }),

  // this method shouldn't be necessary but using the .not modifier is not available in the
  // matcher so we don't know what visibility is required
  toNotBePresent: () => ({
    compare: element => {
      browser.wait(protractor.ExpectedConditions.invisibilityOf(element, browser.params.ecTimeout));
      return  {
        pass: element.isPresent().then(present => !present),
        message: `Expected element not to be present.`
      };
    }
  })
};