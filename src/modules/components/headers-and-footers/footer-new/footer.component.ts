import { Component, Directive } from '../../../../util/angular-utils';

@Component({
  transclude: {
    footerContent: '?footerContent'
  },
  bindings: {
    containerClass: '@'
  },
  template: `
    <footer class="footer" role="contentinfo">
      <div class="{{ !$ctrl.containerClass ? 'footer-wrapper' : $ctrl.containerClass }}">
        <div class="footer-content" ng-transclude="footerContent"></div>
        <ng-transclude></ng-transclude>
      </div>
    </footer>
  `
})
export class FooterComponent { }
