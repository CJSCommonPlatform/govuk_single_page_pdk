import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    label: '@',
    scrollToId: '<',
    focusId: '<'
  },
  template: require('./error-summary-item.component.html')
})
export class ErrorSummaryItemComponent {}
