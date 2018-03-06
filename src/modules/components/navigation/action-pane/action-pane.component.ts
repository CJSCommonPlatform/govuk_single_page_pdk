import { Component } from '@cppui/angularjs-devtools';

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
