import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    breadcrumbs: '<'
  },
  template: require('./breadcrumbs.component.html')
})
export class BreadcrumbsComponent {}
