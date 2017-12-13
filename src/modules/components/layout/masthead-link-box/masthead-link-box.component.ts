import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: `<div class="masthead-link-box" ng-transclude></div>`,
  transclude: true
})
export class MastheadLinkBox {}