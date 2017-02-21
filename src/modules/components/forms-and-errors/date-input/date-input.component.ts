import { Component } from '@govuk/angularjs-devtools';
import { uuid } from '../../../../util/helpers';

const DATE_FORMAT = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/;
const DATE_EXISTS = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; // tslint:disable-line:max-line-length

@Component({
  template: require('./date-input.component.html'),
  bindings: {
    ariaDescribedyBy: '@',
    dateInputMin: '<',
    dateInputMax: '<',
    dateInputFuture: '<',
    dateInputPast: '<'
  },
  require: {
    parentFormCtrl: '?^^form',
    ngModelCtrl:    'ngModel'
  }
})
export class DateInputComponent {

  static $inject = ['$element', '$timeout', '$attrs', 'dateFilter'];

  dateInputMax: any;
  dateInputMin: any;
  dateInputFuture: boolean;
  dateInputPast: boolean;

  dateControl:  any;
  dayLabel:     string;
  monthLabel:   string;
  yearLabel:    string;

  $$identifier = `date-input-${uuid()}`;

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
    private $timeout: ng.ITimeoutService,
    private $attrs: {
      dateInputFormat: string;
      dateInputMin: string;
      dateInputMax: string;
      dateInputFuture: string;
      dateInputPast: string;
    },
    private dateFilter: ng.IFilterDate
  ) {}

  // getter for obtaining the composite view value from the three inner inputs
  // in order to simulate a date being typed in a single field as a single value, the
  // $viewValue is considered to exist when any of the three inner inputs are set
  get $viewValue(): string {
    if (this.dayModel || this.monthModel || this.yearModel) {
      return [
        this.dayModel ? pad(this.dayModel) : '',
        this.monthModel ? pad(this.monthModel) : '',
        this.yearModel || ''
      ].join('-');
    }
    return undefined;
  }

  // propagate a blur effect to the container element so as to allow the component to
  // behave as if it were a regular input – we observe the next process tick such
  // that blur is triggered only when focus is lost from any inner input and not just
  // beingtransferred to another inner input (thereby preventing an event flicker)
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
      this.isFocused = true;
      this.$element.triggerHandler('focus');
    }
  }

  $onChanges() {
    this.maxDate = this.dateInputMax ? toDate(this.dateInputMax) : undefined;
    this.minDate = this.dateInputMin ? toDate(this.dateInputMin) : undefined;
    this.ngModelCtrl.$validate();
  }

  $postLink() {
    // when a parent form exists, remove the inner ng-form as a control such that the
    // inner inputs are hidden from the parent form
    if (this.parentFormCtrl) {
      this.parentFormCtrl.$removeControl(<any> this.dateControl);
    }

    this.dayInput   = this.$element[0].querySelector('[name=dateDay]');
    this.monthInput = this.$element[0].querySelector('[name=dateMonth]');
    this.yearInput  = this.$element[0].querySelector('[name=dateYear]');

    // so that the date input acts as a "single" input, we focus the day input when
    // the date input itself is focused – a tabindex of 0 is required so that focus
    // can be received before it's then forwarded
    this.$element.attr('tabindex', '0');
    this.$element.on('focus', () => {
      if (!this.isFocused) {
        this.dayInput.focus();
      }
    });

    // store valid values as a date object, so that they can be universally consumed
    // and offer a predictable type for additional validators

    // in instances where a view value exists to trigger the validators pipeline, but
    // is not yet a complete date, we return null
    this.ngModelCtrl.$parsers.push(v => {
      if (isDateFormat(v)) {
        return toDate(v.split('-').reverse().join('-'));
      }
      return null;
    });

    if (this.$attrs.dateInputFormat) {
      this.ngModelCtrl.$parsers.push(v => v ? this.dateFilter(v, this.$attrs.dateInputFormat) : v);
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
    // `datePast`   ensures that the date is today or earlier
    // `dateFuture` ensures that the date is today or later

    // always perform dateFormat validator when one or more inputs being entered, despite
    // the fact a $viewValue may not exist, as this can be considered to be as having
    // *some* input
    this.ngModelCtrl.$validators['dateFormat'] = (m, v) => !v || isDateFormat(v);

    this.ngModelCtrl.$validators['dateExists'] = (m, v) => !m || DATE_EXISTS.test(v);

    this.ngModelCtrl.$validators['datePast'] = m => {
      if (!m || !this.dateInputPast) {
        return true;
      }
      return Boolean((toDate(Date.now()) - toDate(m)) >= 0);
    };

    this.ngModelCtrl.$validators['dateFuture'] = m => {
      if (!m || !this.dateInputFuture) {
        return true;
      }
      return Boolean((toDate(m) - toDate(Date.now())) >= 0);
    };

    this.ngModelCtrl.$validators['dateMax'] = m => {
      if (!m || !this.maxDate) {
        return true;
      }
      return Boolean(this.maxDate - toDate(m) >= 0);
    };

    this.ngModelCtrl.$validators['dateMin'] = m => {
      if (!m || !this.minDate) {
        return true;
      }
      return Boolean(toDate(m) - this.minDate >= 0);
    };

    // update inner inputs when outer ng-model value is set directly
    this.ngModelCtrl.$render = () => {
      const val = this.ngModelCtrl.$modelValue === null ? undefined : this.ngModelCtrl.$modelValue;
      const date = toDate(val);
      if (date) {
        this.dayModel   = isNaN(date.getDate()) ? undefined : date.getDate();
        this.monthModel = isNaN(date.getMonth()) ? undefined : date.getMonth() + 1;
        this.yearModel  = isNaN(date.getFullYear()) ? undefined : date.getFullYear();
      }
    };
  }
}

function isDateFormat(val): boolean {
  return DATE_FORMAT.test(val);
}

function toDate(date): any {
  if (typeof date === 'string') {
    const [ year, month, day ] = date.split('-');
    date = Date.UTC(+year, +month - 1, +day);
  }
  return new Date(date);
}

function pad(num: any): string {
  const val = num !== undefined ? num.toString() : '';
  return val.length >= 2 ? val : new Array(2 - val.length + 1).join('0') + val;
}

function toDateString(val): string {
  val = toDate(val);
  return `${val.getDate()}-${val.getMonth() + 1}-${val.getFullYear()}`;
}