import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    title: '@'
  },
  transclude: true,
  template: require('./phase-banner.component.html')
})
export class DeprecatedPhaseBannerComponent {

  type: string;

  static $inject = ['$attrs'];

  constructor($attrs: any) {
    this.type = $attrs.hasOwnProperty('beta') ? 'beta' : $attrs.hasOwnProperty('alpha') && 'alpha';
  }
}
