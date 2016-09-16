import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    menu: '<',
    menuTitle: '@',
    globalNavigation: '@',
    onMenuItemClick: '&'
  },
  template: require('./top-menu.component.html')
})
export class TopMenuComponent {
  private leftList: Array<any>;
  private rightList: Array<any>;
  private menu: any;
  private menuTitle: string;
  private globalNavigation: string;
  private cont: number;
  private onMenuItemClick: Function;
  private open: boolean = false;

  $onInit(): void {
    this.splitMenus();
    this.menuTitle = this.menuTitle || 'Menu'; // default title for menu link if not defined
    this.globalNavigation = this.globalNavigation || 'Global Navigation'; // default description of the component
  }

  indexOfSeparator(list: any): number {
    if (list.items && list.items.length) {
      for (this.cont = 0; this.cont < list.items.length; this.cont++) {
        if (list.items[this.cont].isSeparated) {
          return this.cont;
        }
      }
    }
    return -1;
  }

  toggle(): void {
    this.open = !this.open;
  }

  splitMenus(): void {
    // we split the menu options in 2 types if needed
    if (this.indexOfSeparator(this.menu) > -1) {
      this.leftList = this.menu.items.slice(0, this.indexOfSeparator(this.menu));
      this.rightList = this.menu.items.slice(this.indexOfSeparator(this.menu), this.menu.items.length);
    } else {
      this.leftList = this.menu.items;
    }
  }
}