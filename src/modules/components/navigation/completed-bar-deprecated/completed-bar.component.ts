import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
     item: '<'
  },
  template: require('./completed-bar.component.html')
})
export class CompletedBarComponent {}
