import { Component } from '@cppui/angularjs-devtools';

import { ContainerComponent } from '../components/form-components';
import { uuid } from '../../../../util/helpers';

@Component({
  template: `
    <div data-ng-form="$ctrl.durationControl" class="form-duration">
      <div class="form-group form-group-amount">
        <label class="visuallyhidden"
               for="{{::$ctrl.$$identifier}}-amount"
               data-ng-bind="$ctrl.locale.amount"></label>               
        <input id="{{::$ctrl.$$identifier}}-amount"
               class="form-control"
               aria-describedby="{{$ctrl.ariaDescribedby}}"
               data-ng-model="$ctrl.amountModel"
               type="text"
               name="durationAmount">
      </div>
      <div class="form-group form-group-timespan">
        <label class="visuallyhidden"
               for="{{::$ctrl.$$identifier}}-unit"
               data-ng-bind="$ctrl.locale.unit"></label>
        <select id="{{::$ctrl.$$identifier}}-unit"
                class="form-control form-control-select"
                data-ng-model="$ctrl.unitModel"                
                name="durationUnit">
          <option data-ng-bind="$ctrl.locale.option0"></option>
          <option data-ng-bind="$ctrl.locale.option1"></option>
          <option data-ng-bind="$ctrl.locale.option2"></option>
          <option data-ng-bind="$ctrl.locale.option3"></option>         
        </select>
      </div>
    </div>
  `,
  bindings: {
    ariaDescribedby: '@'
  },
  require: {
    parentFormCtrl: '?^^form',
    ngModelCtrl: 'ngModel',
    formGroupCtrl: '?^pdkFormGroup'
  }
})
export class DurationInputComponent {

  locale: {[k: string]: string};

  $$identifier = `time-input-${uuid()}`;

  static $inject = ['$element', '$timeout'];

  private durationControl: any;
  private isFocused:  boolean;

  private formGroupCtrl: ContainerComponent;
  private ngModelCtrl: ng.INgModelController;
  private parentFormCtrl: ng.IFormController;

  private amountInput: any;
  private unitInput: any;

  private amountModel: number | string;
  private unitModel: number | string;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: ng.ITimeoutService) {}

  // getter for obtaining the composite view value from the two inner inputs
  // in order to simulate a time being typed in a single field as a single value; the
  // $viewValue is considered to exist when any of the two inner inputs are set
  get $viewValue(): string {
    if (this.amountInput || this.unitInput) {
      return [
        this.amountInput,
        this.unitInput
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
      if ([this.amountInput, this.unitInput].indexOf(document.activeElement) === -1) {
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

  $onInit() {
    if (this.formGroupCtrl) {
      this.formGroupCtrl.setMultiInput(true);
      this.formGroupCtrl.setControl(this.ngModelCtrl);
    }

    this.locale = {
      amount: 'Amount',
      unit: 'Time span',
      option0: 'Select',
      option1: 'Months',
      option2: 'Weeks',
      option3: 'Days'
    };
  }

  $onChanges() {
    this.ngModelCtrl.$validate();
  }

  $postLink() {
    // when a parent form exists, remove the inner ng-form as a control such that the
    // inner inputs are hidden from the parent form
    if (this.parentFormCtrl) {
      this.parentFormCtrl.$removeControl(this.durationControl);
    }

    this.amountInput = this.$element[0].querySelector('[name=durationAmount]');
    this.unitInput = this.$element[0].querySelector('[name=durationUnit]');

    // in instances where a view value exists to trigger the validators pipeline, but
    // is not yet a complete time, we return null
    this.ngModelCtrl.$parsers.push(v => isFormatted(v) ? v : null);

    // additional validators:

    // `durationFormat` ensures that the view value corresponds to a dd/mm/yyyy digit format

    // always perform timeFormat validator when one or more inputs being entered, despite
    // the fact a $viewValue may not exist, as this can be considered to be as having
    // *some* input
    this.ngModelCtrl.$validators['durationFormat'] = m => !m || isFormatted(m);

    // update inner inputs when outer ng-model value is set directly
    this.ngModelCtrl.$render = () => {

    };
  }
}

function isFormatted(v): boolean {
  return true;
}
