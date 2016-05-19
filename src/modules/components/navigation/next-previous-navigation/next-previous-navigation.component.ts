import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    navigation: '<'
  },
  template: require('./next-previous-navigation.component.html')
})
export class NextPreviousNavigationComponent {}