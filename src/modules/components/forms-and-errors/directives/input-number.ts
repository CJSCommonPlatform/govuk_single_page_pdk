import { Directive } from '@govuk/angularjs-devtools';

@Directive({
  require: {
    ngModelCtrl: 'ngModel'
  }
})
export class InputNumberDirective {

  ngModelCtrl: ng.INgModelController;

  static $inject = ['$element', '$attrs'];

  private lastVal: number;

  constructor(private $element: ng.IAugmentedJQuery, private $attrs: {
    inputNumberPad?: string;
    inputNumberMin?: string;
    inputNumberMax?: string
    leadingZerosEnabled?: string
  }) {}

  $onInit() {
    const pad = parseInt(this.$attrs.inputNumberPad, 10);
    const inputMax = parseInt(this.$attrs.inputNumberMax, 10);

    // prevent input from containing any non-numeric characters
    this.ngModelCtrl.$parsers.push(val => {
      val = val.toString();

      let newVal = val.replace(/[^\d]/g, '');

      if (this.$attrs.leadingZerosEnabled === undefined) {
        newVal = newVal.replace(/\b0+/g, '');
      }
      if (newVal !== val) {
        this.ngModelCtrl.$setViewValue(newVal);
        this.ngModelCtrl.$render();
      }
      return newVal || undefined;
    });

    // prevent any inputs that are greater than any specified max values
    this.ngModelCtrl.$parsers.unshift(val => {
      const tooLarge = angular.isDefined(inputMax) && !this.ngModelCtrl.$isEmpty(+val) && +val > inputMax;

      if (tooLarge) {
        this.ngModelCtrl.$setViewValue(this.lastVal);
        this.ngModelCtrl.$render();
        return this.lastVal;
      }
      return val;
    });

    // pad single digits with leading zero(es)
    this.ngModelCtrl.$formatters.push(val => {
      if (Number(val) && pad) {
        val = val.toString();
        return val.length >= pad ? val : new Array(pad - val.length + 1).join('0') + val;
      }
      return val;
    });

    // remember current view value for times when we need to revert
    this.ngModelCtrl.$viewChangeListeners.push(() => {
      this.lastVal = this.ngModelCtrl.$viewValue;
    });

    // apply formatters on blur
    this.$element.bind('blur', () => {
      let val = this.ngModelCtrl.$modelValue;
      let idx = this.ngModelCtrl.$formatters.length;

      while (idx--) {
        val = this.ngModelCtrl.$formatters[idx](val);
      }
      if (this.ngModelCtrl.$viewValue !== val) {
        this.ngModelCtrl.$viewValue = val;
        this.ngModelCtrl.$render();
      }
    });
  };
}