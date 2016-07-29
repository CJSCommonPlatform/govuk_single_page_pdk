import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    menu: '<',
    onMenuItemClick: '&'
  },
  template: require('./top-menu.component.html')
})
export class TopMenuComponent {}