import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./header.demo.html')
})
export class GovUkHeaderDemo {
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
  navigation = {
    mainContent: {
      navigate: function () {
        // navigate to main content
      }
    }
  };
  showCookie = false;
  isBusiness = false;
}