import { Component } from '@govuk/angularjs-devtools';

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
export class SummaryItemComponent {
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