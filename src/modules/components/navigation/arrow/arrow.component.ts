import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    text: '@',
    description: '@',
    navigate: '<',
    type: '@' // possible types are next and previous
  },
  template: require('./arrow.component.html')
})
export class ArrowComponent {}
