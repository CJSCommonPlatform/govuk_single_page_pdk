import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: `<div class="masthead-link-box" ng-transclude></div>`,
  transclude: true
})
export class MastheadLinkBox {}
