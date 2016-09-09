import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    links: '<'
  },
  template: require('./column-navigation-links.component.html')
})
export class ColumnNavigationLinksComponent {

  $onInit(): void {
    console.log('Running');
  }
}
