import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    status: '@'
  },
  template: `<strong class="status-label" data-ng-bind="$ctrl.status"></strong>`
})
export class StatusLabelComponent {}
