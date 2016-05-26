import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    tabs: '<'
  },
  template: require('./tab.component.html')
})
export class TabComponent {}