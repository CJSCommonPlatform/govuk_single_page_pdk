import { CollapsibleComponent } from './collapsible.component';

export function CollapseDirective(ngIfDirective) {
  const ngIf = ngIfDirective[0];

  return {
    restrict: 'A',
    transclude: 'element',
    priority: 600,
    terminal: true,
    $$tlb: true,
    require: '^pdkCollapsible',
    link: function(scope: ng.IScope, elem, attrs: {ngIf: any}, collapsibleCtrl: CollapsibleComponent) {

      const ngIfExpression = attrs.ngIf;

      attrs.ngIf = () => {
        if (ngIfExpression && !scope.$eval(ngIfExpression)) {
          return false;
        }
        return !collapsibleCtrl.collapsed;
      };
      ngIf.link.apply(ngIf, arguments);
    }
  };
}

CollapseDirective.$inject = ['ngIfDirective'];