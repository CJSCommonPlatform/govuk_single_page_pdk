import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    digit: '<'
  },
  template: `<div class="gov-digit-box" ng-bind="$ctrl.digit"></div>`
})
export class DigitBoxComponent {}