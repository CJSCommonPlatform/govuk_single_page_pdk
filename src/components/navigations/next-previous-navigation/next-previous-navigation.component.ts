import { Component } from '@govuk/angularjs-framework';

@Component({
  bindings: {
    navigation: '<'
  },
  template: require('./next-previous-navigation.component.html')
})
export class NextPreviousNavigationComponent {}