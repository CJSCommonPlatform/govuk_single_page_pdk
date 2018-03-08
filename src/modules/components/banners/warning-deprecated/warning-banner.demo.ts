import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./warning-banner.demo.html')
})
export class WarningBannerDemo {
  showIcon = false;

  clickExample = function(){
    alert('Just an example of clicking function');
  };
}
