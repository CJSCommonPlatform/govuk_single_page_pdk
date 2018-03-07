import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    item: '<'
  },
  template: require('./badge-item.component.html')
})
export class BadgeItemComponent {}
