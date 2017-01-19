import { Component } from '@govuk/angularjs-devtools';


@Component({
  bindings: {
    type: '@'
  },
  transclude: true,
  template: `<div class="alert alert-{{type || 'warning'}}" role="alert" data-ng-transclude></div>`
})
export class AlertContainerComponent {}


@Component({
  bindings: {
    type: '@',
    showIcon: '<'
  },
  transclude: true,
  template: `
    <i class="icon icon-alert" role="presentation" aria-hidden="true" data-ng-if="$ctrl.icon"></i>
    <div class="alert-message" data-ng-transclude></div>
  `
})
export class AlertContentComponent {

  icon: boolean = true;
  showIcon: boolean;

  $onChanges = changes => {
    if (this.showIcon !== undefined) {
      this.icon = this.showIcon;
    }
  }
}


@Component({
  bindings: {
    banner: '<',
    bannerClass: '@',
    showIcon: '<',
    type: '@'
  },
  transclude: true,
  template: `
    <pdk-alert-container data-type="$ctrl.type">
      <div class="{{!$ctrl.banner ? '' : $ctrl.bannerClass ? $ctrl.bannerClass : 'alert-container'}}">
        <pdk-alert-content data-show-icon="$ctrl.showIcon">
          <div data-ng-transclude></div>
        </pdk-alert-content>       
      </div>  
    </pdk-alert-container>
  `
})
export class AlertComponent {}