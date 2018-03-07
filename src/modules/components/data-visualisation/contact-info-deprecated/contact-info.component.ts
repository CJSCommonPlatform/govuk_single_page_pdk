import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    details: '<'
  },
  template: require('./contact-info.component.html')
})
export class DeprecatedContactInfoComponent {}
