import { Component, Directive } from '@govuk/angularjs-devtools';

@Component({
  transclude: {
    footerContent: '?footerContent'
  },
  template: `
    <footer class="footer" role="contentinfo">
      <div class="footer-wrapper">
        <div class="footer-content" ng-transclude="footerContent"></div>
        <ng-transclude></ng-transclude>
      </div>
    </footer>
  `
})
export class FooterComponent { }
