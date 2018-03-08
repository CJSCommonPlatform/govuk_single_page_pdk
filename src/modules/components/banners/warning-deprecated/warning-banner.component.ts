import { Component } from '../../../../util/angular-utils';

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
