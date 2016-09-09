import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    heading: '@'
  },
  transclude: true,
  template: `
        <section data-ng-show="$ctrl.active" aria-hidden="{{ !$ctrl.active }}" role="tabpanel" id="{{$ctrl.heading | slugify }}" data-ng-transclude>        
        </section>  
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