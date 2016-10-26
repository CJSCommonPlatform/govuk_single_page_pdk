import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    disabled:       '<',
    editLabel:      '@',
    highlight:      '<',
    highlightLabel: '@',
    label:          '@',
    onEdit:         '&?'
  },
  transclude: true,
  $$tlb: true,
  template: `
    <div class="action-bar action-bar-completed">
      <div class="action-bar-header">
        <span class="action-bar-title" data-ng-bind="$ctrl.label"></span>
        <span class="action-bar-options">
          <span class="action-bar-status" 
              data-ng-class="{'action-bar-status-saved': $ctrl.highlight}">
           <span data-ng-if="$ctrl.highlight"
                 data-ng-bind="$ctrl.highlightLabel || 'Saved'"></span>    
          </span>
          <a href=""
             data-ng-if="!$ctrl.disabled" 
             class="action-bar-action link-default" 
             data-ng-click="$ctrl.onEdit({$event: $event})"
             data-ng-bind="$ctrl.editLabel || 'Amend'"></a>
        </span>
      </div>
      <div class="font-xsmall" data-ng-transclude></div> 
    </div>
  `
})
export class ActionCompleteComponent {}