import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: `
    <div class="search" data-ng-class="{'search-secondary': $ctrl.invert}">
      <input id="{{$ctrl.id}}"
             type="search"
             aria-label="{{$ctrl.ariaLabel}}" 
             aria-labelledby="{{$ctrl.ariaLabelledby}}" 
             aria-describedby="{{$ctrl.ariaDescribedby}}"
             data-ng-model="$ctrl.term"
             data-ng-change="$ctrl.setViewValue($ctrl.term)"
             data-ng-keydown="$ctrl.onKeydown($event)"
             class="form-control"><button data-ng-click="$ctrl.search()" class="search-button">Search</button>
    </div>    
  `,
  bindings: {
    id: '@?',
    ariaDescribedby: '@?',
    ariaLabel: '@?',
    ariaLabelledby: '@?',
    invert: '<',
    onSearch: '&'
  },
  require: {
    ngModelCtrl: 'ngModel'
  }
})
export class SearchComponent {

  static $inject = ['$element', '$timeout'];

  input: any;
  ngModelCtrl: ng.INgModelController;
  onSearch: (params: {$event: string}) => any;
  term: string;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: ng.ITimeoutService) {}

  $onChanges = c => {
    if (c.id && c.id.currentValue) {
      this.$timeout(() => this.$element.removeAttr('id'));
    }
  };

  $postLink() {
    this.ngModelCtrl.$render = () => {
      this.term = this.ngModelCtrl.$viewValue;
    };
  }

  onKeydown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.search();
    }
  }

  search() {
    if (this.ngModelCtrl.$valid) {
      this.onSearch({$event: this.ngModelCtrl.$modelValue});
    }
  }

  setViewValue(val: string) {
    this.ngModelCtrl.$setViewValue(val);
  }
}