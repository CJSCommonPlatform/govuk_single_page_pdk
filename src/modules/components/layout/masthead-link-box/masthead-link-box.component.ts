import { Component } from '../../../../util/angular-utils';

@Component({
  template: `<div class="masthead-link-box" ng-transclude></div>`,
  transclude: true
})
export class MastheadLinkBox {}
