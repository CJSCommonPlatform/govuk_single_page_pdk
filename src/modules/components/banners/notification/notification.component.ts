import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    type:     '@',
    showIcon: '<'
  },
  transclude: true,
  template: `
    <div class="gov-notification {{$ctrl.type}}">
      <i class="gov-icon" ng-if="$ctrl._showIcon"></i>
      <div class="gov-notification-body" ng-transclude>
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