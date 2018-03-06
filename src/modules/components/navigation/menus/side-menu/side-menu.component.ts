import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    menuGroup: '<',
    onMenuItemClick: '&'
  },
  template: require('./side-menu.component.html')
})
export class SideMenuComponent {

  // default message for visually hidden menu
  defaultMenuHeading: string = 'Side navigation menu';

}
