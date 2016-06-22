import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    text: '@'
  },
  template: `
    <div class="notice">
      <i class="icon icon-important">
        <span class="visuallyhidden">Warning</span>
      </i>
      <strong class="bold-small" ng-bind="$ctrl.text"></strong>
    </div>
  `
})
export class NoticeComponent {

  text: string;
}