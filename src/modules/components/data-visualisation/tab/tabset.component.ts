import { Component } from '@govuk/angularjs-devtools';
import { TabComponent } from './tab.component';

@Component({
  bindings: {
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
              tabindex="{{ tab.active ? '0':'-1'}}"
              aria-selected="{{ tab.active ? 'true':'false'}}" 
              aria-controls="{{tab.heading | slugify}}" 
              data-ng-bind="tab.heading"></a>
        </li>    
      </ul>
    </div>
    <div class="tabs-content" data-ng-transclude></div>
  </div>`,
  transclude: true
})
export class TabsetComponent {

  tabs: TabComponent[] = [];
  selected: TabComponent;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: any) {}

  add(tab: TabComponent): void {
    this.tabs.push(tab);
    if (!this.selected) {
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
    this.selected = tab;
    if (focus) {
      this.$timeout(() => {
        const elem = <any> this.$element[0].querySelector('a[aria-selected="true"]');
        elem.focus();
      });
    }
  }

  changeTab(event: KeyboardEvent): void {
    let currentTabIndex: number = this.tabs.indexOf(this.selected);

    switch (event.keyCode) {
      case 37:
        if (currentTabIndex > 0) {
          this.select(this.tabs[currentTabIndex - 1]);
        }
        break;
      case 39:
        if (currentTabIndex < this.tabs.length - 1) {
          this.select(this.tabs[currentTabIndex + 1]);
        }
        break;
      default:
        break;
    }
  }
}