import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    status: '@'
  },
  template: `<strong class="status-label" data-ng-bind="$ctrl.status"></strong>`
})
export class StatusLabelComponent {}