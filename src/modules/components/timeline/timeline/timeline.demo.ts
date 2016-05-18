import { Component } from '@govuk/angularjs-devtools';

require('./timeline.scss');

@Component({
  template: require('./timeline.demo.html')
})
export class TimelineDemo {
  timeline = {
    title: 'Timeline',
    elements: [
      {
        dateTitle: 'Today',
        description: 'Charging advice requested',
        timestamp: '09:15AM',
        actions: [
          {title: 'Assign to me'},
          {title: 'Review case', action: function(){console.log('Review case')}, active: true},
          {title: 'Enter your analysis and charging decision'},
        ]
      },
      {
        dateTitle: 'Yesterday',
        description: 'Recorded analysis',
        timestamp: '08:15AM',
        actions: [
          {title: 'Assign to me', action: function(){console.log('Assign to me')}, active: true},
          {title: 'Review case'},
          {title: 'Enter your analysis and charging decision'},
        ]
      },
    ]
  };
}