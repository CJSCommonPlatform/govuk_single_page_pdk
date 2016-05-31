import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./govuk-header.demo.html')
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
}