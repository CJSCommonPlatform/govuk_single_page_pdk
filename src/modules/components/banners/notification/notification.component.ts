import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    type:     '@',
    showIcon: '@'
  },
  transclude: true,
  template: `
    <div class="gov-notification {{$ctrl.type}}">
      <i class="gov-icon gov-icon-important" ng-if="$ctrl.showIcon"></i>
      <div class="gov-notification-body" ng-transclude>
      </div>
    </div>  
  `
})
export class NotificationComponent {}