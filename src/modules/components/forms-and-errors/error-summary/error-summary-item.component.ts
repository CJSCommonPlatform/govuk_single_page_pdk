import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    label: '@',
    scrollToId: '<',
    focusId: '<'
  },
  template: require('./error-summary-item.component.html')
})
export class ErrorSummaryItemComponent {}
