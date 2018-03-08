import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    disabled: '<',
    invert:   '<',
    label:    '@',
    onStart:  '&?'
  },
  template: `
    <div class="action-bar action-bar-start"
         data-ng-class="{'action-bar-secondary': $ctrl.invert, 'action-bar-disabled': $ctrl.disabled}">
      <a class="action-bar-header" href=""
         data-ng-click="!$ctrl.disabled && $ctrl.onStart({$event: $event})">
        <span class="action-bar-title" data-ng-bind="$ctrl.label"></span>
      </a>
    </div>
  `
})
export class ActionStartComponent {

  disabled: boolean;

  static $inject = ['$element', '$timeout'];

  constructor(private $element: ng.IAugmentedJQuery, private $timeout: ng.ITimeoutService) {}

  $onChanges(changes) {
    if (changes.disabled) {
      this.$timeout(() => {
        const a = this.$element.find('a')[0];

        if (this.disabled) {
          a.setAttribute('role', 'button');
          a.setAttribute('aria-disabled', 'true');
          a.setAttribute('tabindex', '-1');
        } else {
          a.removeAttribute('role');
          a.removeAttribute('aria-disabled');
          a.removeAttribute('tab-index');
        }
      });
    }
  }
}
