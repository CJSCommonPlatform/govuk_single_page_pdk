import { Component } from '../../../../util/angular-utils';

@Component({
  transclude: true,
  template: `<ul class="header-menu" ng-transclude></ul>`
})
export class HeaderNavComponent { }


@Component({
  transclude: true,
  require: '^headerNav',
  template: '<ng-transclude></ng-transclude>'
})
export class HeaderNavItemComponent {

  static $inject = ['$element'];

  constructor(private $element: ng.IAugmentedJQuery) {}

  $postLink() {
    this.$element.wrap('<li></li>');
  }
}
