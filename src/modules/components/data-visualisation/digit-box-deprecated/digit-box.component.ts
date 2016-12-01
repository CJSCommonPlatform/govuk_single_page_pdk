import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    digit: '<'
  },
  template: `
    <div class="deprecated-digit-box">
      <span class="deprecated-digit-box-number" data-ng-bind="$ctrl.digit"></span>
    </div>
    `
})
export class DeprecatedDigitBoxComponent {}