import { Component } from '@govuk/angularjs-devtools';

@Component({
  transclude: true,
  template: `
    <hr>
    <div class="footer-support">
      <h2 class="visually-hidden">Support links</h2>
      <ul ng-transclude></ul>
    </div>
  `
})
export class FooterNavComponent { }


@Component({
  require: '^footerNav',
  transclude: true,
  template: '<a ng-transclude></a>'
})
export class FooterNavItemComponent {

  static $inject = ['$element'];

  constructor(private $element: ng.IAugmentedJQuery) {}

  $postLink() {
    this.$element.wrap('<li></li>');
  }
}
