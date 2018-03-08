import { Component } from '../../../../util/angular-utils';

@Component({
  transclude: true,
  template: `<div class="gov-highlight-text success"><ng-transclude></ng-transclude></div>`
})
export class HighlightTextComponent {}
