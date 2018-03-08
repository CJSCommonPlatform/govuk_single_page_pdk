import { Component } from '../../../../util/angular-utils';

import { LanguageService } from '../../../core/language';

@Component({
  bindings: {
    type: '@',
    ngMessages: '<'
  },
  require: 'ngMessages',
  transclude: true,
  template: `
    <span data-ng-if="$ctrl.hasErrors" class="error-message" role="alert">
      <span data-ng-transclude></span>
      <span data-ng-repeat="(key, value) in $ctrl.messages"
            data-ng-message="{{key}}"
            data-ng-bind="value">            
      </span>
    </div>
  `
})
export class ErrorMessageComponent {

  static $inject = ['language'];

  messages: {[key: string]: string};
  ngMessages: any;
  type: string;

  constructor(private language: LanguageService) {}

  $onInit() {
    switch (this.language.locale) {
      default:
        this.messages = {
          required:   this.type === 'radio'          ? `Choose an answer` :
                      this.type === 'checkbox-group' ? `Choose at least one answer` :
                                    'Provide this information',
          email:      `Email not valid – enter correct address`,
          dateFormat: `Date not recognised – use format, for example 19 8 2016`,
          dateExists: `Date doesn't exist – enter again`,
          datePast:   `Date can't be in future – enter valid date`,
          dateFuture: `Date can't be in past – enter valid date`,
          currencyFormat: `Amount not valid – enter again`
        };
    }
  }

  get hasErrors(): boolean {
    return this.ngMessages && Object.keys(this.ngMessages).length > 0;
  }
}
