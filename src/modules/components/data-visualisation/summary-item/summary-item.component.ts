import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    value: '<',
    itemDescription: '<',
    action: '&?'
  },
  template: require('./summary-item.component.html')
})
export class SummaryItemComponent {
  value: any;

  isNumber(): boolean {
    return angular.isNumber(this.value);
  }

  isBoolean(): boolean {
    return typeof(this.value) === 'boolean';
  }
}