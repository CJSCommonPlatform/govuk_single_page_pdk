import { Component } from '../../../../util/angular-utils';

const CURRENCY_REGEX = /^\s*-?[1-9]\d*(\.\d{2})?\s*$/;

@Component({
  template: `
    <div class="form-currency">
      <input id="{{$ctrl.id}}"              
             aria-label="{{$ctrl.ariaLabel}}" 
             aria-labelledby="{{$ctrl.ariaLabelledby}}" 
             aria-describedby="{{$ctrl.ariaDescribedby}}"
             class="form-control form-control-1-4"
             data-ng-model="$ctrl.currency"
             data-ng-change="$ctrl.setViewValue($ctrl.currency)"
             type="text">
    </div>       
  `,
  bindings: {
    id: '@?',
    ariaDescribedby: '@?',
    ariaLabel: '@?',
    ariaLabelledby: '@?'
  },
  require: {
    ngModelCtrl: 'ngModel'
  }
})
export class CurrencyInputComponent {

  static $inject = ['$element', '$timeout'];

  private currency: string;
  private ngModelCtrl: ng.INgModelController;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: ng.ITimeoutService) {}

  $onChanges = c => {
    if (c.id && c.id.currentValue) {
      this.$timeout(() => this.$element.removeAttr('id'));
    }
  };

  $postLink() {
    this.ngModelCtrl.$validators['currencyFormat'] = m => !m || CURRENCY_REGEX.test(m);

    this.ngModelCtrl.$render = () => {
      this.currency = this.ngModelCtrl.$viewValue;
    };
  }

  setViewValue(val: string) {
    this.ngModelCtrl.$setViewValue(val);
  }
}
