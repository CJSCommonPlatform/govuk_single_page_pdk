import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    message: '@'
  },
  template: require('./warning-banner.component.html')
})
export class WarningBannerComponent {}