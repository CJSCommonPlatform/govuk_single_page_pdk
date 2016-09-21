'use strict';

function register() {

  global.savedPages = [];
  var angularSynchronisationDelay = 100;
  var angularSynchronisationPostDelay = 50;

  browser.addMockModule('delayedWaitForAngular', (angularSynchronisationDelay, angularSynchronisationPostDelay) => {

    angular
      .module('delayedWaitForAngular', [])
      .run(function ($rootScope) {

        (function recordPages() {

          window.savedPages = [];

          window.peekSavedPages = function () {
            return window.savedPages;
          };

          window.flushSavedPages = function () {
            var savedPages = window.savedPages;
            window.savedPages = [];

            return savedPages;
          };

          function saveCurrentPage() {
            console.log("Saving current page ", window.savedPages.length);

            window.savedPages.push({
              url: location.hash,
              source: document.documentElement.outerHTML
            });
          }

          var rootElement = document;
          $rootScope.$on('$stateChangeSuccess', onProcessingPageChange);
          function onProcessingPageChange() {
            window.getAngularTestability(rootElement).whenStable(() => { saveCurrentPage(); });
          }

        }());
      });

    if (window.getAngularTestability) {
      throw new Error('getAngularTestability already defined. Protractor extension registration failed');
    }

    window.getAngularTestability = function (rootElement) {
      return {
        /**
         * Its a function invoked after each protractor action (like browser.get() or elem.click())
         *
         * It's used to make sure there are no outstanding HTTP or any other background actions before
         * proceeding with next step
         *
         * @param rootElement - root angular element
         */
        whenStable: function (callback) {
          var $browser = angular.element(rootElement).injector().get('$browser');

          function isCgBusySpinnerVisible() {
            try {
              return $('.cg-busy').is(':visible');
            } catch (e) {
              return false;
            }
          }

          /**
           * data-cg-busy is a directive which displays progress spinner whenever
           * there are some asynchronous tasks in background (most likely HTTP)
           *
           * Since the spinner is not disappearing immediately after task completion (due to fading animation)
           * we have to wait for it to disappear completely (as it could interfere with tests)
           */
          function waitForCgBusy() {
            if (isCgBusySpinnerVisible()) {
              setTimeout(() => { waitForCgBusy(); }, 20);
            }
            else {
              setTimeout(callback, angularSynchronisationPostDelay);
            }
          }

          function waitForBackgroundTasksToComplete() {
            $browser.notifyWhenNoOutstandingRequests(function () {
              waitForCgBusy();
            });
          }

          /**
           * Delayed angular synchronisation seem to improve tests stability
           *
           * WARNING: Delay value should never be too big as it will have major impact on execution time
           * Angular synchronisation is invoked after every ACTION like browser gets, clicks etc.
           */
          setTimeout(waitForBackgroundTasksToComplete, angularSynchronisationDelay);
        }
      };
    };
  });

  console.log('***', 'delayedWaitForAngular registered', '***');
  console.log('**', 'delay set to', angularSynchronisationDelay, 'ms', '**');
  console.log('**', 'post delay set to', angularSynchronisationPostDelay, 'ms', '**');
};

module.exports = {
  register
};
