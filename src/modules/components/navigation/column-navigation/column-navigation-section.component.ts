import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading: '<'
  },
  transclude: true,
  template: require('./column-navigation-section.component.html')
})
export class ColumnNavigationSectionComponent {}
