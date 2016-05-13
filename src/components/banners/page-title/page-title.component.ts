import { Component } from '@govuk/angularjs-framework';

@Component({
  bindings: {
    title: '@'
  },
  template: require('./page-title.component.html')
})
export class PageTitleComponent {}