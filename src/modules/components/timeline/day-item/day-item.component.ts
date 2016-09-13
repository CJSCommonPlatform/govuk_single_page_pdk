import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    dayItem: '<',
    dayIndex: '<'
  },
  template: require('./day-item.component.html')
})
export class DayItemComponent {}