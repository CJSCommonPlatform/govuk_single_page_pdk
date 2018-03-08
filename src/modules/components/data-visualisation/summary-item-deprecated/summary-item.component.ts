import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    value: '<',
    itemDescription: '<',
    action: '&?',
    notInLine: '<',
    large: '@?'
  },
  template: require('./summary-item.component.html')
})
export class SummaryItemDeprecatedComponent {
  value: any;
  large: string;

  isNumber(): boolean {
    return angular.isNumber(this.value);
  }

  isBoolean(): boolean {
    return typeof(this.value) === 'boolean';
  }

  isLarge(): boolean {
    if (this.large && this.large.toLowerCase() === 'true') {
      return true;
    }
    return false;
  }
}
