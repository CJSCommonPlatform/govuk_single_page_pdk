import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
     item: '<'
  },
  template: require('./completed-bar.component.html')
})
export class CompletedBarComponent {}