import { Component } from '../../../../util/angular-utils';

@Component({
  template: `<div class="masthead" ng-transclude></div>`,
  transclude: true
})
export class MastheadComponent {}
