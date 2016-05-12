import { Component } from '@govuk/angularjs-framework';

@Component({
  bindings: {
    details: '<'
  },
  template: require('./contact-info.component.html')
})
export class ContactInfoComponent {}