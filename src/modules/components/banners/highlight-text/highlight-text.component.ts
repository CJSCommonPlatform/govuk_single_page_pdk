import { Component } from '@cppui/angularjs-devtools';

@Component({
  transclude: true,
  template: `<div class="gov-highlight-text success"><ng-transclude></ng-transclude></div>`
})
export class HighlightTextComponent {}
