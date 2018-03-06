import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    links: '<',
    builtBy: '<',
    minimalView: '<',
    isBusiness: '<',
    isBusinessXLarge: '<' // If true, the footer will expand to 1370px
  },
  transclude: {
    contact: '?contact'
  },
  template: require('./footer.component.html')
})
export class DeprecatedFooterComponent {
  isBusiness: boolean;
  minimalView: boolean;
  links: {name: string; url: string, target: string}[];
}
