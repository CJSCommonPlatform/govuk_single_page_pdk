import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./completed-bar.demo.html')
})
export class CompletedBarDemo {
  items = [
        {
          description: 'Full code test met',
          action: 'Amend',
          state: '',
          click: function () {
            console.log('clicked');
          }
        },
        {
          description: 'Proposed authorised charge',
          action: 'Amend',
          state: 'Saved',
          click: function () {
            console.log('clicked');
          }
        }
      ];
}