import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    type:     '@',
    link: '<',
    showIcon: '<'
  },
  transclude: true,
  template: `
    <div class="notification-deprecated notification-deprecated-{{$ctrl.type}}" role="alert">
      <i data-ng-if="($ctrl.showIcon === true && $ctrl.type === 'confirmation') 
      || ($ctrl.showIcon === true && $ctrl.type === 'active')" 
      class="icon icon-tick-white" role="presentation" 
      aria-hidden="true"></i>
      <i data-ng-if="$ctrl.showIcon === true && $ctrl.type === 'locked' " 
      role="presentation" aria-hidden="true" 
      class="icon icon-important-white"></i>
      <div class="notification-deprecated-message">
        <p class="bold-medium"><ng-transclude></ng-transclude></p>
        <p><a data-ng-if="$ctrl.link" data-ng-href="{{ $ctrl.link.url }}" data-ng-bind="$ctrl.link.title"></a></p>
      </div>
    </div>
  `
})
export class DeprecatedNotificationComponent {

  showIcon:  boolean;
  _showIcon: boolean;

  $onChanges() {
    this._showIcon = this.showIcon === undefined ? true : this.showIcon;
  }
}