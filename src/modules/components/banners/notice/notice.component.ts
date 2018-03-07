import { Component } from '../../../../util/angular-utils';

@Component({
  transclude: true,
  template: `
    <div class="notice">
      <i class="icon icon-important">
        <span class="visuallyhidden">Warning</span>
      </i>
      <strong class="bold-small" ng-transclude></strong>
    </div>
  `
})
export class NoticeComponent {}
