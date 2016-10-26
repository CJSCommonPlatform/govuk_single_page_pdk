import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    links: '<',
    builtBy: '<',
    minimalView: '<',
    isBusiness: '<'
  },
  transclude: {
    contact: '?contact'
  },
  template: require('./footer.component.html')
})
export class FooterComponent {
  isBusiness: boolean;
  minimalView: boolean;
  links: {name: string; url: string}[];
}
