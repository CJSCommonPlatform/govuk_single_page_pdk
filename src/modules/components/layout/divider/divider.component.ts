import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: `
    <hr data-ng-class="{'divider-border-dark': $ctrl.dark, 'divider-border-thick': $ctrl.hero}"> 
  `,
  bindings: {
    dark: '<',
    hero: '<'
  }
})
export class DividerComponent {}
