import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./top-menu.demo.html')
})
export class TopMenuDemo {

  menu = {
    items: [
      {
        text: 'First page',
        isActive: true
      },
      {
        text: 'Second page',
        isSeparated: true
      },
      {
        text: 'Third page'
      }
    ]
  };

  onMenuItemClick = (items, menuItem) => {
    if (!menuItem.isActive) {
      this.activateItem(items, menuItem);
    }
  };

  activateItem = (items, menuItem) => {
    items.forEach(item => item.isActive = item === menuItem);
  };

};