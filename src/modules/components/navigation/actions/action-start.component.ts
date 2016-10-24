import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    disabled: '<',
    invert:   '<',
    label:    '@',
    onStart:  '&?'
  },
  template: `
    <div class="action-bar action-bar-start"
         data-ng-class="{'action-bar-secondary': $ctrl.invert}">
      <a class="action-bar-header" href=""         
         data-ng-click="$ctrl.onStart({$event: $event})">
        <span class="action-bar-title" data-ng-bind="$ctrl.label"></span>
      </a>
    </div>
  `
})
export class ActionStartComponent {}