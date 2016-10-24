import { Component } from '@govuk/angularjs-devtools';
import { uuid } from '../../../../util/helpers';

@Component({
  bindings: {
    collapsed: '<',
    collapsedLabel: '@',
    openLabel: '@'
  },
  transclude: true,
  template:  `
    <div class="collapsibles-item" data-ng-class="{'is-open': !$ctrl.collapsed}">
      <div class="collapsibles-header">
    
        <button class="collapsibles-button"
                type="button"
                data-ng-click="$ctrl.collapsed = !$ctrl.collapsed"
                aria-expanded="{{!$ctrl.collapsed}}"
                aria-controls="{{::$ctrl.id}}">
          <i class="collapsibles-toggle" role="presentation"
             data-ng-class="{'collapsibles-toggle-off': !$ctrl.collapsed,
                             'collapsibles-toggle-on': $ctrl.collapsed}">
          </i>
          <span class="collapsibles-button-text"
                data-ng-bind="$ctrl.collapsed ? ($ctrl.collapsedLabel || 'Show')
                                              : ($ctrl.openLabel || 'Hide')">
          </span>
        </button>    
      </div>
      
      <div id="{{::$ctrl.id}}" data-ng-transclude></div>
    </div>
  `
})
export class CollapsibleComponent {

  id: string = uuid();
  collapsed: boolean;
}