import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    message: '@',
    showIcon: '<?',
    linkedText: '@',
    onClick: '&?'
  },
  template: require('./warning-banner.component.html')
})
export class DeprecatedWarningBannerComponent {
  showIcon: boolean;
  onClick: Function;

  $onInit() {
    this.showIcon = this.showIcon === false ? false : true;
  }
}