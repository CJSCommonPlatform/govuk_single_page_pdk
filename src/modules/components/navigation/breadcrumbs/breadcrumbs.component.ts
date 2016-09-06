import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    breadcrumbs: '<'
  },
  template: require('./breadcrumbs.component.html')
})
export class BreadcrumbsComponent {}
