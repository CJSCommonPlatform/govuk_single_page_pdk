import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    count:  '<',
    hero:   '<',
    inline: '<',
    label:  '<'
  },
  template: `
    <div class="summary-item" data-ng-class="{'summary-item-inline': $ctrl.inline}">
      <span class="summary-item-number"
            data-ng-class="{'bold-xlarge': !$ctrl.hero, 'bold-xxlarge': $ctrl.hero}"
            data-ng-bind="$ctrl.count">
      </span>
      <span class="summary-item-label" data-ng-bind="$ctrl.label"></span>  
    </div>
  `
})
export class SummaryItemComponent {}