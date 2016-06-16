import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./side-menu.demo.html')
})
export class SideMenuDemo {

  menuGroup = {
    heading: 'Contents',
    menus: [
      {
        showArrowsOnItems: true,
        items: [
          {
            text: 'Suspects and charges',
            sref: 'suspects-and-charges',
            isActive: true
          },
          {
            text: 'Victims, witnesses and statements',
            sref: 'suspects-and-charges'
          },
          {
            text: 'Additional documents',
            sref: 'suspects-and-charges',
            isDisabled: true
          }
        ]
      }
    ]
  };

  menuGroup2 = {
    heading: 'Suspects and charges',
    subheading: '2 items',
    menus: [
      {
        items: [
          {
            title: 'Peter JAMES',
            text: 'Single proposed charge',
            isActive: true
          },
          {
            title: 'John BROWN',
            text: 'Single proposed charge'
          }
        ]
      }

    ]
  };

  menuGroup3 = {
    heading: 'Police summary',
    subheading: '6 items',
    menus: [
      {
        items: [
          {
            title: 'Summary of key evidence',
            isActive: true
          },
          {
            title: 'Defendant interview'
          },
          {
            title: 'Injuries'
          },
          {
            title: 'Previous convictions'
          },
          {
            title: 'Court orders and compensation'
          },
          {
            title: 'Supervising officer’s commments'
          }
        ]
      }
    ]
  };

  menuGroup4 = {
    heading: 'Victims, witnesses and statements',
    subheading: '2 items',
    menus: [
      {
        heading: 'Victims',
        items: [
          {
            title: 'Linda THOMAS',
            text: ['Vulnerable', '1 statement'],
            isActive: true
          }
        ]
      },
      {
        heading: 'Witnesses',
        items: [
          {
            title: 'Kasia HRYNISZAK',
            text: '2 statements'
          }
        ]
      }
    ]
  };

  menuGroup5 = {
    heading: 'Exhibits',
    subheading: '3 items',
    menus: [
      {
        heading: 'Photos',
        items: [
          {
            title: 'Text is centred vertically when image is taller',
            image: 'images/justice.jpg',
            isActive: true
          },
          {
            image: 'images/justice.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
              'Nulla pellentesque ante id lectus condimentum tempor.'
          }
        ]
      },
      {
        heading: 'Videos',
        items: [
          {
            title: 'CCTV from street camera'
          }
        ]
      }
    ]
  };

  onMenuItemClick = function (menuGroup, menuItem) {
    if (menuItem.isDisabled) {
      return false;
    }
    menuGroup.menus.forEach(function (menu) {
      menu.items.forEach(function (item) {
        item.isActive = item === menuItem;
      });
    });
  };
}