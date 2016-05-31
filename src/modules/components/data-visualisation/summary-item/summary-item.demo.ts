import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./summary-item.demo.html')
})
export class SummaryItemDemo {
  item = {
    value: 3,
    description: 'Statements',
    action: function(){console.log('hello'); }
  };

  item2 = {
    value: true,
    description: 'Supervisor comments provided',
    action: function(){console.log('hello'); }
  };
}