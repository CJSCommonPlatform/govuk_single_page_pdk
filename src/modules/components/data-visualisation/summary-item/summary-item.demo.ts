import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./summary-item.demo.html')
})
export class SummaryItemDemo {

  notInLine = true;

  item = {
    value: 3,
    description: 'Statements',
    action: function(){console.log('hello'); }
  };

  item2 = {
    value: 24,
    description: 'Supervisor comments provided',
    action: function(){console.log('hello'); }
  };

  item3 = {
      value: 2,
      description: 'Defendants'
  };
}