import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./completed-bar.demo.html')
})
export class CompletedBarDemo {
  items = [
        {
          description: 'Provided plea issues',
          subDescription: 'Acceptable for a guilty plea to s.20 wounding or inflicitng grievous bodily..',
          action: 'Amend',
          state: '',
          click: function () {
            console.log('clicked');
          }
        },
        {
          description: 'Proposed charge authorised',
          subDescription: '',
          action: 'Amend',
          state: 'Saved',
          click: function () {
            console.log('clicked');
          }
        }
      ];
}