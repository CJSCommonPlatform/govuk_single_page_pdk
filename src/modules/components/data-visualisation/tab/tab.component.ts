import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading: '@'
  },
  transclude: true,
  template: `
        <div ng-if="$ctrl.active" class="tabs-panel" id="before-you-start" role="tabpanel">        
          <div class="tabs-panel-inner" tabindex="0"  ng-transclude>
          </div>
        </div>  
  `,
  require: {
    tabsetCtrl: '^govTabset'
  }
})
export class TabComponent {

  heading: string;

  tabsetCtrl: any;

  get active(): boolean {
    return this.tabsetCtrl.isActive(this);
  }

  $onInit(): void {
    this.tabsetCtrl.add(this);
  }

  $onDestroy(): void {
    this.tabsetCtrl.remove(this);
  }
}