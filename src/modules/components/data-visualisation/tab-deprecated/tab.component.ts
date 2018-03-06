import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    heading: '@',
    /*
     a function that will be invoked when the tab is selected can optionally be passed
     */
    onClick: '&?'
  },
  transclude: true,
  template: `
        <section 
          data-ng-show="$ctrl.active" 
          aria-hidden="{{ !$ctrl.active }}" 
          role="tabpanel" id="{{$ctrl.heading | slugify }}" 
          data-ng-transclude>        
        </section>  
  `,
  require: {
    tabsetCtrl: '^govTabset'
  }
})
export class DeprecatedTabComponent {

  heading: string;
  onClick: Function;
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
