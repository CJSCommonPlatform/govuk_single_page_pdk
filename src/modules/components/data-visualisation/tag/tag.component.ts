import { Component } from '@cppui/angularjs-devtools';

@Component({
  transclude: true,
  template: `
    <div class="inline-tag" data-ng-transclude></div>
  `
})
export class TagComponent {}
