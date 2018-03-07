import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    title: '@',
    type: '@'
  },
  transclude: true,
  template: `
    <div class="phase-banner">
      <p>
        <strong class="phase-tag" ng-bind="$ctrl.titleText"></strong>
        <span data-ng-transclude></span>
      </p>
    </div>
  `
})
export class PhaseBannerComponent {

  type: string;
  title: string;

  get titleText(): string {
    if (this.title) {
      return this.title;
    }

    switch (this.type) {
      case 'alpha':
        return 'Alpha';

      case 'beta':
        return 'Beta';

      default:
        return '';
    }
  }
}
