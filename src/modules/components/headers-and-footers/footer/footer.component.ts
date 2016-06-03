import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    links: '<',
    builtBy: '<',
    isBusiness: '<'
  },
  template: require('./footer.component.html')
})
export class FooterComponent {}