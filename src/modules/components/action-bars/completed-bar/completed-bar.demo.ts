import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./completed-bar.demo.html')
})
export class CompletedBarDemo {
  items = [
        {
          description: 'Full code test met',
          action: 'Amend',
          click: function () {
            console.log('clicked');
          }
        }
      ];
}