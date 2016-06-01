import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./app-layout.component.html')
})
export class AppLayout {

  static $inject = ['$location', '$anchorScroll'];

  constructor(private $location: ng.ILocationService, private $anchorScroll: ng.IAnchorScrollService){}

  heading: string = 'Single Page Platform Development Kit';
  navItems = [
    {
      state: 'layout',
      label: 'Layout'
    },
    {
      state: 'content',
      label: 'Content'
    },
    {
      state: 'components',
      label: 'Components'
    },
    {
      state: 'examples',
      label: 'Examples'
    }
  ];
}