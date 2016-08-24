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

  onMenuItemClick = (items, currentItem) => {
    if (!currentItem.isActive) {
      this.activateItem(items, currentItem);
    }
  };

  activateItem = (items, currentItem) => {
    items.forEach(item => item.isActive = item === currentItem);
  };

};