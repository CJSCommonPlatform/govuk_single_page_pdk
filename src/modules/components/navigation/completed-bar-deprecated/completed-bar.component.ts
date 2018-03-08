import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
     item: '<'
  },
  template: require('./completed-bar.component.html')
})
export class CompletedBarComponent {}
