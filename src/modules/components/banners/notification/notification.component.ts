import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    type: '@',
    showIcon: '<',
    flow: '<'
  },
  transclude: true,
  template: `
    <div class="pdk-notification pdk-notification-{{$ctrl.type}}" ng-class="{'flow': $ctrl.flow}" role="alert">
      <i data-ng-if="($ctrl._showIcon === true && $ctrl.type === 'confirmation') 
                  || ($ctrl._showIcon === true && $ctrl.type === 'active')" 
      class="icon icon-tick-white" role="presentation" 
      aria-hidden="true"></i>
      <i data-ng-if="$ctrl._showIcon === true && $ctrl.type === 'locked'" 
      role="presentation" aria-hidden="true" 
      class="icon icon-important-white"></i>
      <div class="pdk-notification-message">
        <p class="bold-medium" data-ng-transclude></ng-transclude></p>
      </div>
    </div>
  `
})
export class NotificationComponent {

  showIcon:  boolean;
  _showIcon: boolean;

  $onChanges() {
    this._showIcon = this.showIcon === undefined ? true : this.showIcon;
  }
}