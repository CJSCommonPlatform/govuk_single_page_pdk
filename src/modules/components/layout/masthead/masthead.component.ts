import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: `<div class="masthead" ng-transclude></div>`,
  transclude: true
})
export class MastheadComponent {}