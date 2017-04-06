import { Component } from '@govuk/angularjs-devtools';

import { LanguageService } from '../../../core';

@Component({
  template: `
    <div id="global-cookie-message" style="display: block">
      <p>
        {{ $ctrl.message }}
        <a href="https://www.gov.uk/help/cookies">{{ $ctrl.linkText }}</a>
      </p>
    </div>
  `
})
export class CookieMessageComponent {

  linkText: string;
  message: string;

  static $inject = ['language'];

  constructor(private language: LanguageService) { }

  $onInit() {
    switch (this.language.locale) {
      default:
        this.linkText = 'Find out more about cookies.';
        this.message = 'GOV.UK uses cookies to make the site simpler.';
    }
  }
}
