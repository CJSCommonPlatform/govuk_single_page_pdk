import { Component } from '@govuk/angularjs-devtools';
import { LazyValidationDirective } from '../lazy-validation/lazy-validation.directive.ts';

@Component({
  template: require('./search.component.html'),
  bindings: {
    autocomplete:    '@',
    placeholder:     '@',
    name:            '@',
    inputId:         '@',
    ariaDescribedby: '@',
    ngModel:         '=',
    inline:          '<?',
    ngMinlength:     '@?',
    required:        '<?',
    onSearch:        '&'
  },
  require: {
    ngModelCtrl: 'ngModel',
    lazyValidationController: '^^?lazyValidation'
  }
})
export class SearchComponent {

  name: string;
  ngModel: any;
  ngModelCtrl: ng.INgModelController;
  lazyValidationController: LazyValidationDirective;
  onSearch: ($event: {$event: string}) => any;
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
    if (this.ngModelCtrl.$valid) this.onSearch({$event: this.ngModel});
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
