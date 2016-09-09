import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./start-bar.demo.html')
})
export class StartBarDemo {
  items = [
        {
          description: 'Give remand advice',
          action: 'Start',
          click: function () {
            console.log('clicked');
          }
        }
      ];
}