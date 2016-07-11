import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./timeline.demo.html')
})
export class TimelineDemo {

  timeline: any  = {
    title: 'Timeline',
    elements: [
      {
        dateTitle: '2016-05-19',
        description: 'Charging advice requested',
        timestamp: '09:15AM',
        actions: [
          {title: 'Assign to me'},
          {title: 'Review case', action: () => { console.log('Review case'); }, active: true},
          {title: 'Enter your analysis and charging decision'}
        ]
      },
      {
        dateTitle: '2016-05-23',
        description: 'Recorded analysis',
        timestamp: '08:15AM',
        actions: [
          {title: 'Assign to me', action: () => { console.log('Assign to me'); }, active: true},
          {title: 'Review case'},
          {title: 'Enter your analysis and charging decision'}
        ]
      }
    ]
  };
}