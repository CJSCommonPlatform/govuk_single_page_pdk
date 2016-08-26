import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading:  '<',
    navItems: '<',
    navigation: '<',
    showCookie: '<', // if true will display the cookie message over the header
    isBusiness: '<' // if true the width will expand to 1170px
  },
  template: require('./header.component.html')
})
export class GovUkHeaderComponent {

  heading: string;
  navItems: {state: string; label: string}[];
  showCookie: boolean;
  isBusiness: boolean;
}