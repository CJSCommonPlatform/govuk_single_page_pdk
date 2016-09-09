import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./breadcrumbs.demo.html')
})
export class BreadcrumbsDemo {

  breadcrumbsData = [
    {
      state: 'home',
      text: 'Platform Development Kit'
    },
    {
      state: 'components',
      text: 'Components'
    },
    {
      text: 'Navigation'
    }
  ];
}