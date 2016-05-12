import { Component } from '@govuk/angularjs-framework';

@Component({
  bindings: {
    title: '<'
  },
  transclude: true,
  template: require('./phase-banner.component.html')
})
export class PhaseBannerComponent {}