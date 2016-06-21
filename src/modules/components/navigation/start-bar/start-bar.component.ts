import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    item: '<'
  },
  template: require('./start-bar.component.html')
})
export class StartBarComponent {}