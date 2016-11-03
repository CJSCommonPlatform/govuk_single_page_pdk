import { Component } from '@govuk/angularjs-devtools';

import { LanguageService } from '../../../core/language';

@Component({
  bindings: {
    multipleChoice: '<',
    ngMessages: '<'
  },
  require: 'ngMessages',
  transclude: true,
  template: `
    <span data-ng-if="$ctrl.hasErrors" class="error-message" role="alert">
      <span data-ng-transclude></span>
      <span data-ng-message="required"   data-ng-bind="$ctrl.messages.required"></span>
      <span data-ng-message="dateFormat" data-ng-bind="$ctrl.messages.dateFormat"></span>
      <span data-ng-message="dateExists" data-ng-bind="$ctrl.messages.dateExists"></span>
      <span data-ng-message="dateMax"    data-ng-bind="$ctrl.messages.dateMax"></span>    
    </div>
  `
})
export class ErrorMessageComponent {

  static $inject = ['language'];

  ngMessages: any;
  multipleChoice: boolean;
  messages: {[key: string]: string};

  constructor(private language: LanguageService) {}

  $onInit() {
    switch (this.language.locale) {
      default:
        this.messages = {
          required:   this.multipleChoice ? `Choose an answer` : `Provide this information`,
          dateFormat: `Date not recognised – use format, for example 19 8 2016`,
          dateExists: `Date doesn't exist – enter again`,
          datePast:   `Date can't be in future – enter valid date`,
          dateFuture: `Date can't be in past – enter valid date`
        };
    }
  }

  get hasErrors(): boolean {
    return this.ngMessages && Object.keys(this.ngMessages).length > 0;
  }
}