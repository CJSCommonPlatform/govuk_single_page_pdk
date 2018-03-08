import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    heading: '<'
  },
  transclude: {
    links: '?links',
    tasks: '?tasks'
  },
  template: require('./action-pane.component.html')
})
export class ActionPaneComponent {}
