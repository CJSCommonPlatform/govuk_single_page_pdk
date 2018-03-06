import { Directive } from '@cppui/angularjs-devtools';

@Directive({
  restrict: 'A',
  link: function(scope, element, attrs) {
    element.find('a').addClass('action-bar-header-secondary');
  }
})
export class ActionBarSecondaryStyle {}
