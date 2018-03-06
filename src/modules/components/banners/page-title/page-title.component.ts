import { Component } from '@cppui/angularjs-devtools';

@Component({
  transclude: true,
  bindings: {
    heading: '@'
  },
  template: `
    <div class="page-title-banner">
      <h1 ng-bind="$ctrl.heading"></h1>
      <div data-ng-transclude></div>
    </div>
  `
})
export class PageTitleComponent {}
