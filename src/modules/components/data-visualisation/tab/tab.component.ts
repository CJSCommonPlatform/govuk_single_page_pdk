import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    details: '<'
  },
  template: require('./contact-info.component.html')
})
export class ContactInfoComponent {}