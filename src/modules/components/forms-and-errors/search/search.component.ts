import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: `
    <div class="search" data-ng-class="{'search-secondary': $ctrl.invert}">
      <input id="{{$ctrl.id}}"
             type="search"
             aria-label="{{$ctrl.ariaLabel}}" 
             aria-labelledby="{{$ctrl.ariaLabelledby}}" 
             aria-describedby="{{$ctrl.ariaDescribedby}}"
             data-ng-class="{'form-control-wide': $ctrl.inline === false}"
             data-ng-model="$ctrl.term"
             data-ng-change="$ctrl.setViewValue($ctrl.term)"
             data-ng-keydown="$ctrl.onKeydown($event)"
             class="form-control"><button
              type="{{ ::$ctrl.canSubmit ? 'submit' : 'button' }}"
              ng-click="$ctrl.search()"
              class="search-button">Search</button>
    </div>    
  `,
  bindings: {
    id: '@?',
    ariaDescribedby: '@?',
    ariaLabel: '@?',
    ariaLabelledby: '@?',
    inline: '<',
    invert: '<',
    onSearch: '&',
    searchType: '@'
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
  searchType: string;
  term: string;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: ng.ITimeoutService) {}

  get canSubmit(): boolean {
    return this.searchType === 'submit';
  }

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
      if (!this.canSubmit) {
        e.preventDefault();
      }
      this.search();
    }
  }

  search() {
    this.onSearch({$event: this.ngModelCtrl.$modelValue});
  }

  setViewValue(val: string) {
    this.ngModelCtrl.$setViewValue(val);
  }
}
