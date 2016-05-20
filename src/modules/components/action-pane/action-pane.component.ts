import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings:{
    heading: '<'
  },
  transclude: {
    links: '?links',
    tasks: '?tasks'
  },
  template: require('./action-pane.component.html')
})
export class ActionPaneComponent {}