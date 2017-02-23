import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    disabled: '<',
    open: '<',
    label: '@'
  },
  transclude: true,
  template: `
    <div class="action-bar-content">
      <details class="font-xsmall">
        <summary>
          <span class="summary" data-ng-bind="$ctrl.label || 'View Details'"></span>
        </summary>
        <div class="panel panel-border-narrow" data-ng-transclude></div>
      </details>
    </div>
  `
})
export class ActionDetailsComponent {

  static $inject = ['$element'];

  open: boolean = false;

  constructor(private $element: ng.IAugmentedJQuery) {}

  $onChanges(c) {
    if (c.open) {
      const details = this.$element.find('details')[0];
      if (c.open.currentValue) {
        details.setAttribute('open', 'open');
      } else {
        details.removeAttribute('open');
      }
    }
  }
}