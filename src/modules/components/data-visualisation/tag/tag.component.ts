import { Component } from '@govuk/angularjs-devtools';

@Component({
  transclude: true,
  template: `
    <div class="inline-tag" data-ng-transclude></div>
  `
})
export class TagComponent {}