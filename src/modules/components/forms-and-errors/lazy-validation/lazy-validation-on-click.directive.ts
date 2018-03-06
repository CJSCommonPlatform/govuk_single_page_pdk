import { Directive } from '@cppui/angularjs-devtools';
import { LazyValidationDirective } from './lazy-validation.directive.ts';

@Directive({
  restrict: 'A',
  require: {
    lazyValidationController: '^^lazyValidation'
  },
  bindToController: true,
  controllerAs: '$ctrl',
  scope: {
    ifValidCallback: '&?lazyValidationOnClick'
  }
})
export class LazyValidationOnClickDirective {

  static $inject = ['$element', '$window', '$attrs', 'smoothScroll', '$scope'];

  lazyValidationController: LazyValidationDirective;
  ifValidCallback: any;

  constructor(private $element: ng.IAugmentedJQuery,
              private $window: ng.IWindowService,
              private $attrs: any,
              private smoothScroll: any,
              private $scope: ng.IScope) {
  }

  $postLink(): void {
    this.$element.bind('click', () => {
      this.$scope.$apply(this.revalidateAndRunCallbackIfDefined.bind(this));
    });
  };

  revalidateAndRunCallbackIfDefined(): void {
    this.lazyValidationController.revalidate();

    if (this.lazyValidationController.isValid() && this.ifValidCallback) {
      this.ifValidCallback();
    } else {
      let id = this.$attrs.movePageTo;
      let elem = this.$window.document.getElementById(id);
      if (elem) {
        this.smoothScroll(elem);
      }
    }
  };

}
