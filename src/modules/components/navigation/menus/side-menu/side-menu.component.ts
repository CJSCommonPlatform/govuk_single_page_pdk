import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    menuGroup: '<',
    onMenuItemClick: '&'
  },
  template: require('./side-menu.component.html')
})
export class SideMenuComponent {}