import { Component } from '../../../../util/angular-utils';

import { LanguageService } from '../../../core';

@Component({
  template: `
    <div id="skiplink-container">
      <div>
        <a class="skiplink" href="#{{ $ctrl.targetId || 'content' }}">{{ $ctrl.linkText }}</a>
      </div>
    </div>
  `,
  bindings: {
    targetId: '@'
  }
})
export class SkipLinkComponent {

  linkText: string;

  static $inject = ['language'];

  constructor(private language: LanguageService) { }

  $onInit() {
    switch (this.language.locale) {
      default:
        this.linkText = 'Skip to main content';
    }
  }
}
