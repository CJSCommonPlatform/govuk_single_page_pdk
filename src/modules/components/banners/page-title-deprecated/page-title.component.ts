import { Component } from '../../../../util/angular-utils';

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
