import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    style: '<',
    showIcon: '<'
  },
  transclude: true,
  template: `
    <div class="gov-notification {{$ctrl.style}}">
      <i class="gov-notification-icon" ng-if="$ctrl.showIcon"></i>
      <div class="gov-notification-body" ng-transclude>
      </div>
    </div>  
  `
})
export class NotificationComponent {

}