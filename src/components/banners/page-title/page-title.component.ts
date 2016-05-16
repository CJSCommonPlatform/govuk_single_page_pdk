import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    title: '@'
  },
  template: require('./page-title.component.html')
})
export class PageTitleComponent {}