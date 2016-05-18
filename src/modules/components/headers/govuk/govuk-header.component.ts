import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading:  '<',
    navItems: '<'
  },
  template: require('./govuk-header.component.html')
})
export class GovUkHeaderComponent {

  heading: string;
  navItems: {state: string; label: string}[];
}