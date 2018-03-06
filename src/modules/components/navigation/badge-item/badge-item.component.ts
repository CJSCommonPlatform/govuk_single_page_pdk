import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    item: '<'
  },
  template: require('./badge-item.component.html')
})
export class BadgeItemComponent {}
