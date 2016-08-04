import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./search.component.html'),
  bindings: {
    autocomplete:    '@',
    placeholder:     '@',
    name:            '@',
    inputId:         '@',
    inline:          '=',
    ariaDescribedby: '@',
    ngModel:         '=',
    ngMinlength:     '@',
    required:        '=',
    onSearch:        '&'
  },
  require: {
    ngModelCtrl: 'ngModel'
  }
})
export class SearchComponent {

  name: string;
  ngModel: any;
  ngModelCtrl: ng.INgModelController;
  onSearch: ($event: {$event: string}) => any;
  inline: boolean;
  required: boolean;
  inputElement: JQuery;

  static $inject = ['$element', '$scope'];

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {}

  $onInit(): void {
    this.inputElement = this.$element.children().eq(0);
  }

  $postLink(): void {
    this.enableSubmitOnEnter();

    if (this.inline) { this.makeInline(); }
    if (this.required) { this.makeRequired(); }
  }

  submit(): void {
    if (this.ngModelCtrl.$valid) this.onSearch({$event: this.ngModel});
  }

  enableSubmitOnEnter(): void {
    this.$element.find('input').bind('keydown', e => {
      if (e.keyCode === 13 && this.ngModelCtrl.$valid) {
        e.preventDefault();
        this.$scope.$apply(() => this.submit());
      }
    });
  }

  makeInline(): void {
    this.inputElement.addClass('gov-search-inline');
  }

  makeRequired(): void {
    this.inputElement.attr('required', 'required');
  }
}
