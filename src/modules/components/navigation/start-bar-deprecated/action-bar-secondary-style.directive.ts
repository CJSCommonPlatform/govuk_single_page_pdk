import { Directive } from '../../../../util/angular-utils';

@Directive({
  restrict: 'A',
  link: function(scope, element, attrs) {
    element.find('a').addClass('action-bar-header-secondary');
  }
})
export class ActionBarSecondaryStyle {}
