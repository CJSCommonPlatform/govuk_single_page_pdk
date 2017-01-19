import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    tag: '@'
  },
  template: `
    <span class="inline-tag" data-ng-bind="$ctrl.tag"</span>
  `
})
export class TagComponent {}