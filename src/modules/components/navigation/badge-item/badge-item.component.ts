import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    item: '<'
  },
  template: require('./badge-item.component.html')
})
export class BadgeItemComponent {}