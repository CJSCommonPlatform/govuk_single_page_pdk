"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var SideMenuDemo = (function () {
    function SideMenuDemo() {
        this.menuGroup = {
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
                            title: "Image is contained and centred within a 70x70 px area",
                            image: 'assets/images/justice.jpg',
                            fact: 'hummingbirds are the only bird that can fly backwards'
                        },
                        {
                            title: "When the height of the image is smaller than the content,\n              the image container is centred vertically",
                            image: 'assets/images/justice_landscape.jpg'
                        },
                        {
                            title: "The component has extra logic to constrain the\n              line count to 3, so that max height of the item is 90px:\n              Lorem ipsum dolor sit amet consectetur adipiscing elit\n              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris \n              nisi ut aliquip ex ea commodo consequat.",
                            image: 'assets/images/justice_landscape.jpg'
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
        this.onMenuItemClick = function (menuGroup, menuItem) {
            if (!(menuItem.isDisabled || menuItem.isActive)) {
                this.logFact(menuItem.fact);
                this.activateItem(menuGroup, menuItem);
            }
        };
        this.activateItem = function (menuGroup, menuItem) {
            menuGroup.menus.forEach(function (menu) {
                menu.items.forEach(function (item) {
                    item.isActive = item === menuItem;
                });
            });
        };
        this.logFact = function (fact) {
            console.log('Did you know that ' + fact + '?');
        };
    }
    SideMenuDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./side-menu.demo.html')
        })
    ], SideMenuDemo);
    return SideMenuDemo;
}());
exports.SideMenuDemo = SideMenuDemo;
;
//# sourceMappingURL=side-menu.demo.js.map