(function () {
  'use strict';

  angular
    .module('ngGovUk.form-validation.lazy-validation', [])
    .directive('lazyValidation', lazyValidation);

  /**
   * Lazy Validation
   *
   * It wraps default angular validation which is dynamic in it's nature
   * and delays its execution till it's explicitly required
   * (eg. when user clicks on a form's 'Submit' button)
   *
   * <form lazy-validation="formName">
   *   <span ng-if="formName.name.$error.required">Name is required</span>
   *   <input type=text name="name">
   *
   *   <button lazy-validation-on-click></button>
   * </form>
   */
  function lazyValidation() {
    function createDeepCopy(validationData) {
      return angular.copy(validationData);
    }

    return {
      restrict: 'A',
      require: 'form',
      controller: ['$scope', function ($scope) {
        this.revalidate = function () {
          $scope.validation = createDeepCopy($scope.angularFormController);
        };

        this.isValid = function () {
          return $scope.angularFormController.$valid;
        };
      }],
      link: function ($scope, element, attrs, angularFormController) {
        $scope.angularFormController = angularFormController;
      },
      scope: {
        validation: '=lazyValidation'
      }
    };
  }
})();