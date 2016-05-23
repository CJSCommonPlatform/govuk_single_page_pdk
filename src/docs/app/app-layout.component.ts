import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./app-layout.component.html')
})
export class AppLayout {

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
      state: 'components.index',
      label: 'Components'
    },
    {
      state: 'examples',
      label: 'Examples'
    }
  ];
}