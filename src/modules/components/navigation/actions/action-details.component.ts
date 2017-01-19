import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    disabled: '<',
    label: '@'
  },
  transclude: true,
  template: `
    <div class="action-bar-content">
      <details class="font-xsmall">
        <summary>
          <span class="summary" data-ng-bind="$ctrl.label || 'View Details'"</span>
        </summary>
        <div class="panel panel-border-narrow" data-ng-transclude></div>
      </details>
    </div>
  `
})
export class ActionDetailsComponent {}