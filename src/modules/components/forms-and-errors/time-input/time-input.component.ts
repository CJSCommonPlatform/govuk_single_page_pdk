import { Component } from '@govuk/angularjs-devtools';

import { LanguageService } from '../../../core/language';
import { ContainerComponent } from '../components/form-components';
import { uuid } from '../../../../util/helpers';

const TWENTY_FOUR_HOUR_REGEX = /^(?:\d|[01]\d|2[0-3]):[0-5]\d$/;

@Component({
  template: `
    <div data-ng-form="$ctrl.timeControl" class="form-time">
      <div class="form-group form-group-hour">
        <label for="{{::$ctrl.$$identifier-hour"
               class="visuallyhidden" data-ng-bind="$ctrl.locale.hour"></label>
        <input id="{{::$ctrl.$$identifier-hour"
               class="form-control"        
               aria-describedby="{{$ctrl.ariaDescribedby}}"
               type="text"
               name="timeHour"
               required
               maxlength="2"
               autocomplete="off"
               data-leading-zeros-enabled
               data-ng-model="$ctrl.hourModel"
               data-ng-change="$ctrl.onInputChange()"
               data-ng-focus="$ctrl.onInputFocus()"
               data-ng-blur="$ctrl.onInputBlur()"
               data-input-number>
      </div>
      <div class="form-group form-group-minute">
        <label for="{{::$ctrl.$$identifier}}-minute"
               class="visuallyhidden" data-ng-bind="$ctrl.locale.minute"></label>
        <input id="{{::$ctrl.$$identifier}}-minute"
               class="form-control"        
               type="text"
               name="timeMinute"
               required
               maxlength="2"
               autocomplete="off"
               data-leading-zeros-enabled
               data-ng-model="$ctrl.minuteModel"
               data-ng-change="$ctrl.onInputChange()"
               data-ng-focus="$ctrl.onInputFocus()"
               data-ng-blur="$ctrl.onInputBlur()"
               data-input-number>
      </div>
    </div>
  `,
  bindings: {
    ariaDescribedby: '@'
  },
  require: {
    parentFormCtrl: '?^^form',
    ngModelCtrl:    'ngModel',
    formGroupCtrl:  '?^pdkFormGroup'
  }
})
export class TimeInputComponent {

  locale: {[k: string]: string};

  $$identifier = `time-input-${uuid()}`;

  static $inject = ['$element', '$timeout', 'language'];

  private timeControl: any;
  private isFocused:  boolean;

  private formGroupCtrl: ContainerComponent;
  private ngModelCtrl: ng.INgModelController;
  private parentFormCtrl: ng.IFormController;

  private hourInput: any;
  private minuteInput: any;

  private hourModel: number | string;
  private minuteModel: number | string;

  constructor(
    private $element: ng.IAugmentedJQuery,
    private $timeout: ng.ITimeoutService,
    private language: LanguageService
  ) {}

  $onInit() {
    if (this.formGroupCtrl) {
      this.formGroupCtrl.setMultiInput(true);
      this.formGroupCtrl.setControl(this.ngModelCtrl);
    }

    switch (this.language.locale) {
      default:
        this.locale = {
          hour: 'Hour',
          minute: 'Minute'
        };
    }
  }

  $onChanges() {
    this.ngModelCtrl.$validate();
  }

  $postLink() {
    // when a parent form exists, remove the inner ng-form as a control such that the
    // inner inputs are hidden from the parent form
    if (this.parentFormCtrl) {
      this.parentFormCtrl.$removeControl(this.timeControl);
    }

    this.hourInput = this.$element[0].querySelector('[name=timeHour]');
    this.minuteInput = this.$element[0].querySelector('[name=timeMinute]');

    // in instances where a view value exists to trigger the validators pipeline, but
    // is not yet a complete time, we return null
    this.ngModelCtrl.$parsers.push(v => isTimeFormat(v) ? v : null);

    // additional validators:

    // `timeFormat` ensures that the view value corresponds to a HH:MM format
    // `timeExists` ensures that the time itself exists (00-23 hours, 00-59 minutes)

    // always perform timeFormat validator when one or more inputs are entered, despite
    // the fact a $modelValue will never be valid, as it can still be considered as having
    // *some* input
    this.ngModelCtrl.$validators['timeFormat'] = (m, v) => !v || isTimeFormat(v);

    this.ngModelCtrl.$validators['timeExists'] = m => !m || TWENTY_FOUR_HOUR_REGEX.test(m);

    // update inner inputs when outer ng-model value is set directly
    this.ngModelCtrl.$render = () => {
      const parts = (this.ngModelCtrl.$modelValue || '').split(':');

      this.hourModel = parts[0];
      this.minuteModel = parts[1];
    };
  }
  // getter for obtaining the composite view value from the two inner inputs
  // in order to simulate a time being typed in a single field as a single value; the
  // $viewValue is considered to exist when any of the two inner inputs are set
  get $viewValue(): string {
    if (this.hourModel || this.minuteModel) {
      return [
        this.hourModel,
        this.minuteModel
      ].join(':');
    }
    return undefined;
  }

  // propagate a blur effect to the container element so as to allow the component to
  // behave as if it were a regular input – we observe the next process tick such
  // that blur is triggered only when focus is lost from any inner input and not when it
  // is just being transferred to another inner input (thereby preventing an event flicker)
  onInputBlur() {
    this.$timeout(() => {
      if ([this.hourInput, this.minuteInput].indexOf(document.activeElement) === -1) {
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
}

function isTimeFormat(val): boolean {
  const parts = val.split(':');

  return parts[1].length === 2 && parts[0].length === 2;
}