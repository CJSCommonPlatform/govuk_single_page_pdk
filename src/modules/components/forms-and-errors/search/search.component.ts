import { Component } from '@govuk/angularjs-devtools';
import { LazyValidationDirective } from '../lazy-validation/lazy-validation.directive.ts';

@Component({
  template: require('./search.component.html'),
  bindings: {
    autocomplete:     '@',
    label:            '@',
    showLabel:        '@',
    placeholder:      '@',
    name:             '@',
    inputId:          '@',
    ariaDescribedby:  '@',
    resultsFoundStr:  '@',
    searchStr:        '@',
    ngModel:          '=',
    inline:           '<?',
    ngMinlength:      '@?',
    required:         '<?',
    onSearch:         '&',
    onCriteriaChange: '&?',
    results:          '='
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
  showLabelFlag: boolean;
  showLabel: string;
  resultFoundStr: string;
  searchStr: string;
  ngModelCtrl: ng.INgModelController;
  formCtrl: ng.IFormController;
  lazyValidationController: LazyValidationDirective;
  onSearch: ($event: { $criteria: string }) => any;
  onCriteriaChange: ($event: { $criteria: string, $valid: boolean }) => any;
  inline: boolean;
  required: boolean;

  static $inject = ['$element', '$scope'];

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {}

  $onInit() {
    this.showLabelFlag = (this.showLabel && this.showLabel.toLowerCase()) === 'true' ? true : false;
    this.resultFoundStr = this.resultFoundStr ? this.resultFoundStr : 'Results found';
    this.searchStr = this.searchStr ? this.searchStr : 'search';
  }

  $postLink(): void {
    this.enableSubmitOnEnter();
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
}
