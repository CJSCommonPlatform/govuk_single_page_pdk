import { Component } from '../../../../util/angular-utils';

@Component({
  transclude: true,
  template: `
    <div class="inline-tag" data-ng-transclude></div>
  `
})
export class TagComponent {}
