import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading:  '<',
    navItems: '<',
    navigation: '<',
    showCookie: '<', // if true will display the cookie message over the header
    showSkipLink: '<', // if true will display 'Skip to main content' link
    isBusiness: '<', // if true the width will expand to 1170px,
    logoUrl: '@?',
    title: '@?',
    skipLinkText: '@?'
  },
  transclude: {
    cookies: '?cookies'
  },
  template: require('./header.component.html')
})
export class GovUkHeaderComponent {

  heading: string;
  navItems: {state: string; label: string}[];
  showCookie: boolean;
  isBusiness: boolean;
  logoUrl: string;
  title: string;
  linkTitle: string;
  skipLinkText: string;

  $onInit() {
    // setting some default values
    this.logoUrl = this.logoUrl || '/assets/images/gov.uk_logotype_crown.png';
    this.title = this.title || 'GOV.UK';
    this.linkTitle = this.linkTitle || 'https://www.gov.uk';
    this.skipLinkText = this.skipLinkText || 'Skip to main content';
  }
}