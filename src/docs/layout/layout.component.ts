import { Component } from '@govuk/angularjs-framework';

@Component({
  template: require('./layout.component.html')
})
export class DocsLayoutComponent {

  heading: string = 'Single Page Platform Development Kit';
  navItems = [
    {
      state: 'components',
      label: 'Components'
    }
  ];
}