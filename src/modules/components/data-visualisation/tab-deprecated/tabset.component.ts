import { Component } from '../../../../util/angular-utils';
import { DeprecatedTabComponent } from './tab.component';

@Component({
  bindings: {
    vertical: '<',
    /*
     a default index can be passed so a tab can be preselected by default
     */
    defaultIndex: '<?'
  },
  template: `
  <div class="tabs-deprecated"
  data-ng-class="{'tabs-deprecated-horizontal': !$ctrl.vertical, 'tabs-deprecated-vertical': $ctrl.vertical}">
    <div class="tabs-deprecated-header">
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
    <div class="tabs-deprecated-content" data-ng-transclude></div>
  </div>`,
  transclude: true
})
export class DeprecatedTabsetComponent {

  static $inject = ['$element', '$timeout'];

  tabs: DeprecatedTabComponent[] = [];
  selected: DeprecatedTabComponent;
  defaultIndex: number;

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: any) {}

  add(tab: DeprecatedTabComponent): void {
    this.tabs.push(tab);
    if (!this.selected && !this.defaultIndex) {
      this.select(tab, false);
    }
  }

  isActive(tab: DeprecatedTabComponent): boolean {
    return tab === this.selected;
  }

  remove(tab: DeprecatedTabComponent): void {
    const idx = this.tabs.indexOf(tab);
    if (idx > -1) {
      this.tabs.splice(idx, 1);
    }
    this.select(this.tabs[0], false);
  }

  select(tab: DeprecatedTabComponent, focus: boolean = true): void {
    this.selected = tab;
    if (this.selected && this.selected.onClick) {
      this.selected.onClick();
    }
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

  $postLink(): void {
    this.defaultIndex = this.defaultIndex || 0;
    if (this.defaultIndex) {
      this.select(this.tabs[this.defaultIndex], true);
    }
  }
}
