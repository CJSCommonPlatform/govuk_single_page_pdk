import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./side-menu.demo.html')
})
export class SideMenuDemo {

  menuGroup = {
    heading: 'Menu Group Heading',
    subheading: 'Clicking on an item will activate it, deactivate all other items, and ' +
    'log a \'did you know\' message with the ' +
    'fact property of the current menu item, unless it is already active or disabled.',
    menus: [
      {
        heading: 'Items with arrows',
        showArrowsOnItems: true,
        items: [
          {
            text: 'Item 1',
            fact: 'stewardesses is the longest word that is typed with only the left hand',
            isActive: true
          },
          {
            text: 'Item 2',
            fact: 'M&M\'s chocolate stands for the initials for its inventors Mars and Murrie'
          },
          {
            text: 'Item 3',
            fact: 'Koalas sleep around 18 hours a day',
            isDisabled: true
          }
        ]
      },
      {
        heading: 'Items with content, without arrows',
        items: [
          {
            title: 'Item 1 title',
            fact: 'elephants are the only mammal that can\'t jump',
            text: 'Single line string'
          },
          {
            title: 'Item 2 title',
            fact: 'on your birthday you share it with 9 million others',
            text: ['Multiline text', 'array of strings']
          }
        ]
      },
      {
        heading: 'Item with an image',
        items: [
          {
            title: 'Image title',
            text: 'Image 1 text',
            image: 'images/justice.jpg',
            fact: 'hummingbirds are the only bird that can fly backwards'
          }
        ]
      }
    ]
  };

  /*the component has no internal logic but allows a number of actions on the controller/service
  level by exposing both the entire menuGroup object, and the currently clicked menuItem object,
  on the onMenuItem click attribute.
  Note that in the html, the naming of the arguments is important:
    on-menu-item-click="$ctrl.onMenuItemClick(menuGroup, menuItem)"
  Also, since the menuGroup object is passed by reference, it is possible to access and modify it
  from other contexts, eg. passing it to a function which activates the next/previous item, and
  attaching the function on pagination components.
  */
  onMenuItemClick = function (menuGroup, menuItem) {
    if (!(menuItem.isDisabled || menuItem.isActive)) {
      this.logFact(menuItem.fact);
      this.activateItem(menuGroup, menuItem);
    }
  };

  activateItem = function (menuGroup, menuItem) {
    menuGroup.menus.forEach(function (menu) {
      menu.items.forEach(function (item) {
        item.isActive = item === menuItem;
      });
    });
  };

  logFact = function (fact) {
    console.log('Did you know that ' + fact + '?');
  };

};