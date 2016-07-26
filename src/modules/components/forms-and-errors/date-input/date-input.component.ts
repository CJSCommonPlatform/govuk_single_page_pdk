import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./date-input.component.html'),
  bindings: {
    dateInputMin: '<',
    dateInputMax: '<',
    dayLabel:     '@',
    monthLabel:   '@',
    yearLabel:    '@'
  },
  require: {
    parentFormCtrl: '?^^form',
    ngModelCtrl:    'ngModel'
  }
})
export class DateInputComponent {

  static $inject = ['$element', '$scope', '$timeout', '$attrs', 'dateFilter'];

  DATE_FORMAT = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/;
  DATE_EXISTS = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; // tslint:disable-line:max-line-length

  dateInputMax: any;
  dateInputMin: any;
  identifier:   string;
  dateControl:  any;
  dayLabel:     string;
  monthLabel:   string;
  yearLabel:    string;

  private isFocused:  boolean;
  private minDate:    any;
  private maxDate:    any;

  private ngModelCtrl: ng.INgModelController;
  private parentFormCtrl: ng.IFormController;

  private dayInput:   any;
  private monthInput: any;
  private yearInput:  any;

  private dayModel:   number | string;
  private monthModel: number | string;
  private yearModel:  number | string;

  constructor(
    private $element: ng.IAugmentedJQuery,
    private $scope: ng.IScope,
    private $timeout: ng.ITimeoutService,
    private $attrs: {
      dateInputFormat: string;
      dateInputMin: string;
      dateInputMax: string;
    },
    private dateFilter: ng.IFilterDate
  ) {}

  // getter for obtaining the composite view value from the three inner inputs
  // in order to simulate a date being typed in a single field as a single value, the
  // $viewValue is undefined when any of the three inner inputs are empty
  get $viewValue(): string {
    if (this.dateControl.$error.required) {
      return undefined;
    }
    return `${pad(this.dayModel)}-${pad(this.monthModel)}-${this.yearModel}`;
  }

  // propagate a blur effect to the container element so as to allow the component to
  // behave as if it were a regular input – we observe the next process tick such
  // that blur is triggered only when focus is lost from any inner input is not being
  // transferred to another inner input, thereby preventing an event flicker
  onInputBlur() {
    this.$timeout(() => {
      if ([this.dayInput, this.monthInput, this.yearInput].indexOf(document.activeElement) === -1) {
        this.ngModelCtrl.$setTouched();
        this.$element.triggerHandler('blur');
        this.isFocused = false;
      }
    });
  }

  // trigger an update of the outer ng-model whenever an inner input changes
  onInputChange() {
    this.ngModelCtrl.$setViewValue(this.$viewValue);
  }

  // propagate a focus event to the container element so as to allow the component
  // to behave as if it were a regular input
  onInputFocus() {
    if (!this.isFocused) {
      this.$element.triggerHandler('focus');
      this.isFocused = true;
    }
  }

  $onChanges() {
    this.maxDate = this.dateInputMax ? new Date(this.dateInputMax) : undefined;
    this.minDate = this.dateInputMin ? new Date(this.dateInputMin) : undefined;
  }

  $postLink() {
    this.identifier = `date-input-${this.$scope.$id}`;

    // when a parent form exists, remove the inner ng-form as a control such that the
    // inner inputs are hidden from the parent form
    if (this.parentFormCtrl) {
      this.parentFormCtrl.$removeControl(<any> this.dateControl);
    }

    this.dayInput   = this.$element[0].querySelector('[name=dateDay]');
    this.monthInput = this.$element[0].querySelector('[name=dateMonth]');
    this.yearInput  = this.$element[0].querySelector('[name=dateYear]');

    // store valid values as a date object, so that they can be universally consumed
    // and offer a predictable type for additional validators
    this.ngModelCtrl.$parsers.push(val => new Date(val.split('-').reverse().join('-')));

    if (this.$attrs.dateInputFormat) {
     this.ngModelCtrl.$parsers.push(date => this.dateFilter(date, this.$attrs.dateInputFormat));
    }

    // convert model value back to the composite $viewValue (see getter above)
    this.ngModelCtrl.$formatters.push((val: any) => {
      if (val) {
        return toDateString(val);
      }
    });

    // additional validators:

    // these run against the $viewValue rather than the $modelValue, as the javascript
    // Date constructor used by the model value (via the $parsers) transforms invalid dates
    // into valid ones (e.g. 30/02/2015 => 02/03/2015)
    // NOTE: these validators do NOT run when the view value is empty, so as to prevent
    // errors being raised on an optional ng-model

    // `dateFormat` ensures that the view value corresponds to a dd/mm/yyyy digit format
    // `dateExists` ensures that the date itself exists (days in month, leap years etc)
    // `dateMax`    ensures that the date is less than or equal to the evaluated date
    // `dateMin`    ensures that the date is greater than or equal to the evaluated date

    this.ngModelCtrl.$validators['dateFormat'] = (m, v) => !v || this.DATE_FORMAT.test(v);
    this.ngModelCtrl.$validators['dateExists'] = (m, v) => !v || this.DATE_EXISTS.test(v);
    this.ngModelCtrl.$validators['dateMax'] = m => {
      if (!m || !this.maxDate) {
        return true;
      }
      return Boolean(this.maxDate - <any> new Date(m) >= 0);
    };
    this.ngModelCtrl.$validators['dateMin'] = m => {
      if (!m || !this.minDate) {
        return true;
      }
      return Boolean(<any> new Date(m) - this.minDate >= 0);
    };

    // update inner inputs when outer ng-model value is set directly
    this.ngModelCtrl.$render = () => {
      const date = new Date(this.ngModelCtrl.$modelValue);
      if (date) {
        this.dayModel   = date.getDate();
        this.monthModel = date.getMonth() + 1;
        this.yearModel  = date.getFullYear();
      }
    };
  }
}

function toDateString(val) {
  val = new Date(val);
  return `${val.getDate()}-${val.getMonth() + 1}-${val.getFullYear()}`;
}

function pad(num: any): string {
  const val = num !== undefined ? num.toString() : '';
  return val.length >= 2 ? val : new Array(2 - val.length + 1).join('0') + val;
}