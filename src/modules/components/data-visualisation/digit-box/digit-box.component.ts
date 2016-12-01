import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    digit: '<'
  },
  template: `
    <div class="digit-box">
      <span class="digit-box-number" data-ng-bind="$ctrl.digit"></span>
    </div>
  `
})
export class DigitBoxComponent {}