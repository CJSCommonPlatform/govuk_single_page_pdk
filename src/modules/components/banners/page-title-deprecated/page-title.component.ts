import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    title: '@'
  },
  transclude: {
    subtitle: '?subtitle'
  },
  template: require('./page-title.component.html')
})
export class DeprecatedPageTitleComponent {}