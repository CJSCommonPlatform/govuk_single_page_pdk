import { Component } from '@cppui/angularjs-devtools';

@Component({
  transclude: true,
  bindings: {
    containerClass: '@'
  },
  template: `
    <header class="header" role="banner">
      <div class="{{ !$ctrl.containerClass ? 'header-wrapper' : $ctrl.containerClass }}">
        <nav class="header-nav">
          <ng-transclude></ng-transclude>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent { }

@Component({
  transclude: true,
  template: `<ng-transclude class="header-name"></ng-transclude>`
})
export class HeaderNameComponent { }
