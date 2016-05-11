import { Component } from '@govuk/angularjs-framework';
import { highlightHTML } from '../../util/prism';

@Component({
  template: highlightHTML(require('./action-pane.demo.html'))
})
export class ActionPaneDemo {}