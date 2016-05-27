import { Component } from '@govuk/angularjs-devtools';
import { TabComponent } from './tab.component';

@Component({
  template: `
  <div class="tabs">
    <ul class="tabs-list" role="tablist">
      <li role="presentation" ng-repeat="tab in $ctrl.tabs">
        <a ng-click="$ctrl.select(tab)" role="tab" 
        tabindex="{{ tab.active ? '0':'-1'}}" aria-selected="{{ tab.active ? 'true':'false'}}" 
        aria-controls="{{tab.heading}}" ng-bind="tab.heading"></a>
      </li>    
    </ul>
  </div>
  <div class="tabs-content" ng-transclude></div>`,
  transclude: true
})
export class TabsetComponent {

  tabs: TabComponent[] = [];
  selected: TabComponent;

  add(tab: TabComponent): void {
    this.tabs.push(tab);
    if (!this.selected) {
      this.select(tab);
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
    this.select(this.tabs[0]);
  }

  select(tab: TabComponent): void {
    this.selected = tab;
  }
}