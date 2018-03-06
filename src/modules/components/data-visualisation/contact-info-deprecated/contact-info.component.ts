import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    details: '<'
  },
  template: require('./contact-info.component.html')
})
export class DeprecatedContactInfoComponent {}
