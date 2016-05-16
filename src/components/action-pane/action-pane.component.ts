require('./action-pane.scss');

import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading: '<'
  },
  transclude: true,
  template: require('./action-pane.component.html')
})
export class ActionPaneComponent {}