import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./app-layout.component.html')
})
export class AppLayout {

  static $inject = ['$location', '$anchorScroll'];

  constructor(private $location: ng.ILocationService, private $anchorScroll: ng.IAnchorScrollService){}

  // header values
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

  // footer values
  myLinks = [
    {name: 'Help', url: 'https://www.gov.uk/help'},
    {name: 'Cookies', url: 'https://www.gov.uk/help/cookies'},
    {name: 'Contact', url: 'https://www.gov.uk/contact'}
  ];

  builtBy: any = {name: 'Common Platform', url: 'https://www.gov.uk/government/organisations/government-digital-service'};
}