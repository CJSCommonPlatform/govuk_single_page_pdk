import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    digit: '<'
  },
  template: `
    <div class="pdk-digit-box">
      <span class="pdk-digit-box-number" data-ng-bind="$ctrl.digit"></span>
    </div>
  `
})
export class DigitBoxComponent {}
