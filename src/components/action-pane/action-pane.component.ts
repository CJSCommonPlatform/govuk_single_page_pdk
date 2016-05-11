require('./action-pane.scss');

import { Component } from '@govuk/angularjs-framework';

@Component({
  transclude: true,
  template: require('./action-pane.component.html')
})
export class ActionPaneComponent {}