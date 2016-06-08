import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./badge-item.demo.html')
})
export class BadgeItemDemo {
  items = [
    {
      description: 'Test 1', count: 5, click: function () {
        console.log('clicked');
      }
    },
    {
      description: 'Test 2', count: 3, selected: true, click: function () {
        console.log('clicked');
    }
    }
  ];
}