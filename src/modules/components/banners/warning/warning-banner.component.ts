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
export class WarningBannerComponent {
  showIcon: boolean;
  onClick: Function;

  $onInit() {
    this.showIcon = this.showIcon === false ? false : true;
    console.log('OnClick:', this.onClick);
  }
}