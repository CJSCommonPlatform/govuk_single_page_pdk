import { Component } from '../../util/angular-utils';

@Component({
  template: require('./app-layout.component.html')
})
export class AppLayout {

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
    }
  ];

  // footer values
  myLinks = [
    {name: 'Help', url: 'https://www.gov.uk/help'},
    {name: 'Cookies', url: 'https://www.gov.uk/help/cookies'},
    {name: 'Contact', url: 'https://www.gov.uk/contact'}
  ];

  builtBy: any = {
    name: 'Common Platform',
    url:  'https://www.gov.uk/government/organisations/government-digital-service'
  };
}
