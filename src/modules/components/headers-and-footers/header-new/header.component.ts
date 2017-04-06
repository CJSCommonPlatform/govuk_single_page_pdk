import { Component } from '@govuk/angularjs-devtools';

@Component({
  transclude: true,
  template: `
    <header class="header" role="banner">
      <div class="header-wrapper">
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