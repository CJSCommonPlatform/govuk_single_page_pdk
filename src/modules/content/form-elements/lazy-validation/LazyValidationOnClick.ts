(function () {
  'use strict';

  angular
    .module('ngGovUk.form-validation.lazy-validation-on-click', [
      'ngGovUk.form-validation.lazy-validation',
      'smoothScroll'
    ])
    .directive('lazyValidationOnClick', ['smoothScroll', '$window', lazyValidationOnClick]);

  /**
   * @name lazyVAlidationOnClick
   * @desc This directive triggers revalidation of a form on a click event and scrolls to the id provided if form is invalid
   * (should go to the error message validation)
   *
   * @example
   * <div id="error-summary"></div>
   * <form lazy-validation="scopePropertyToBindFormValidation">
   *     <button data-move-page-to="error-summary" lazy-validation-on-click="optionalCallbackWhenFormValid()" />
   * </form>
   */
  function lazyValidationOnClick(smoothScroll, $window) {
    return {
      restrict: 'A',
      require: '^^lazyValidation',
      /** Makes sure postLink runs before ng-click */
      priority: '-1',
      link: function ($scope, element, attrs, lazyValidationController) {
        var revalidateAndRunCallbackIfDefined = function () {
          lazyValidationController.revalidate();

          if (lazyValidationController.isValid() && $scope.ifValidCallback) {
            $scope.ifValidCallback();
          } else {
            var id = attrs.movePageTo;
            var element = $window.document.getElementById(id);
            if(element) {
              smoothScroll(element);
            }
          }
        };

        element.bind('click', function () {
          $scope.$apply(revalidateAndRunCallbackIfDefined);
        });
      },
      scope: {
        ifValidCallback: '&?lazyValidationOnClick'
      }
    };
  }
})();