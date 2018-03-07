import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    item: '<'
  },
  template: require('./start-bar.component.html')
})
export class StartBarComponent {}
