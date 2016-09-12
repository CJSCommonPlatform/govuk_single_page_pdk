import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    dayItem: '<',
    dayIndex: '<'
  },
  transclude: true,
  template: require('./day-item.component.html')
})
export class DayItemComponent {}