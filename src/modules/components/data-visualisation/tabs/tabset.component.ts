import { Component } from '@cppui/angularjs-devtools';
import { TabComponent } from './tab.component';

@Component({
  bindings: {
    onTabSelected: '&',
    vertical: '<'
  },
  template: `
    <div class="tabs" data-ng-class="{'tabs-horizontal': !$ctrl.vertical, 'tabs-vertical': $ctrl.vertical}">
      <div class="tabs-header">
        <ul class="list" role="tablist" data-ng-keydown="$ctrl.changeTab($event)">
          <li data-ng-repeat="tab in $ctrl.tabs" role="presentation">
            <a href="" 
               data-ng-click="$ctrl.select(tab)" 
               role="tab" 
               tabindex="{{ tab.active ? '0' : '-1'}}"
               aria-selected="{{ tab.active ? 'true': 'false'}}" 
               aria-controls="{{tab.id}}" 
               data-transclude-tab-heading="tab">
             {{tab.heading}}
            </a>
          </li>
        </ul>
      </div>
      <div class="tabs-content" data-ng-transclude></div>
    </div>
  `,
  transclude: true
})
export class TabsetComponent {

  static $inject = ['$element', '$timeout'];

  tabs: TabComponent[] = [];
  selected: TabComponent;
  defaultIndex: number;
  onTabSelected: Function;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: any) {}

  add(tab: TabComponent): void {
    this.tabs.push(tab);
    if (!this.selected && !this.defaultIndex) {
      this.select(tab, false);
    }
  }

  isActive(tab: TabComponent): boolean {
    return tab === this.selected;
  }

  remove(tab: TabComponent): void {
    const idx = this.tabs.indexOf(tab);
    if (idx > -1) {
      this.tabs.splice(idx, 1);
    }
    this.select(this.tabs[0], false);
  }

  select(tab: TabComponent, focus: boolean = true): void {
    if (focus) {
      const previousIndex = this.tabs.indexOf(this.selected);
      const currentIndex = this.tabs.indexOf(tab);

      this.selected = tab;
      this.onTabSelected({ $event: { currentIndex, previousIndex } });

      this.$timeout(() => {
        const elem = <any> this.$element[0].querySelector('a[aria-selected="true"]');
        elem.focus();
      });
    } else {
      this.selected = tab;
    }
  }

  changeTab(event: KeyboardEvent): void {
    const currentTabIndex = this.tabs.indexOf(this.selected);

    switch (event.keyCode) {

      case 37:
      case 38:
        event.preventDefault();

        if (currentTabIndex > 0) {
          this.select(this.tabs[currentTabIndex - 1]);
        }
        break;

      case 39:
      case 40:
        event.preventDefault();

        if (currentTabIndex < this.tabs.length - 1) {
          this.select(this.tabs[currentTabIndex + 1]);
        }
        break;

      default:
        break;
    }
  }

  $postLink(): void {
    this.defaultIndex = this.defaultIndex || 0;
    if (this.defaultIndex) {
      this.select(this.tabs[this.defaultIndex], true);
    }
  }
}
