import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: `<div class="masthead" ng-transclude></div>`,
  transclude: true
})
export class MastheadComponent {}
