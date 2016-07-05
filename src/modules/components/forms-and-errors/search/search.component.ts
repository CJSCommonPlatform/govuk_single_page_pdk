import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./search.component.html'),
  bindings: {
    autocomplete: '@',
    name:         '@',
    ngModel:      '=',
    onSearch:     '&'
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

  static $inject = ['$element', '$scope'];

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {}

  $onInit() {
    this.$element.find('input').bind('keydown', e => {
      if (e.keyCode === 13 && this.ngModelCtrl.$valid) {
        e.preventDefault();
        this.$scope.$apply(() => this.submit());
      }
    });
  }

  submit() {
    if (this.ngModelCtrl.$valid) this.onSearch({$event: this.ngModel});
  }
}