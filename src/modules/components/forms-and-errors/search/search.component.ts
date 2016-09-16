import { Component } from '@govuk/angularjs-devtools';
import { LazyValidationDirective } from '../lazy-validation/lazy-validation.directive.ts';

@Component({
  template: require('./search.component.html'),
  bindings: {
    autocomplete:     '@',
    placeholder:      '@',
    name:             '@',
    inputId:          '@',
    ariaDescribedby:  '@',
    ngModel:          '=',
    inline:           '<?',
    ngMinlength:      '@?',
    required:         '<?',
    onSearch:         '&',
    onCriteriaChange: '&?',
    results: '='
  },
  require: {
    ngModelCtrl: 'ngModel',
    formCtrl: '^^?form',
    lazyValidationController: '^^?lazyValidation'
  }
})
export class SearchComponent {

  name: string;
  ngModel: any;
  ngModelCtrl: ng.INgModelController;
  formCtrl: ng.IFormController;
  lazyValidationController: LazyValidationDirective;
  onSearch: ($event: { $criteria: string }) => any;
  onCriteriaChange: ($event: { $criteria: string, $valid: boolean }) => any;
  inline: boolean;
  required: boolean;

  static $inject = ['$element', '$scope'];

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {}

  $postLink(): void {
    this.enableSubmitOnEnter();
    if (this.inline) this.makeInline();
  }

  submit(): void {
    if (this.lazyValidationController) this.lazyValidationController.revalidate();
    if (this.onCriteriaChange) this.onCriteriaChange({
      $criteria: this.formCtrl[this.name].$viewValue,
      $valid: this.formCtrl.$valid
    });
    if (this.ngModelCtrl.$valid) this.onSearch({ $criteria: this.ngModel });
  }

  enableSubmitOnEnter(): void {
    this.$element.find('input').bind('keydown', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.$scope.$apply(() => this.submit());
      }
    });
  }

  makeInline(): void {
    this.$element.children().eq(0).addClass('gov-search-inline');
  }
}
