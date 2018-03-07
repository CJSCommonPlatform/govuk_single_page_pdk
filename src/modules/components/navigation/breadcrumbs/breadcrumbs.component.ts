import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    breadcrumbs: '<'
  },
  template: require('./breadcrumbs.component.html')
})
export class BreadcrumbsComponent {}
