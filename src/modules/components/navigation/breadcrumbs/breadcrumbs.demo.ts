import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./breadcrumbs.demo.html')
})
export class BreadcrumbsDemo {

  breadcrumbs = [
    {
      text: 'Platform Development Kit',
      onClick: function() {
        console.log('Clicked on \"Platform Development Kit\"');
      }
    },
    {
      text: 'Components',
      onClick: function() {
        console.log('Clicked on \"Components\"');
      }
    },
    {
      text: 'Navigation'
    }
  ];
}
