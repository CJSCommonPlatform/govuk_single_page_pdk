import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./completed-bar.demo.html')
})
export class CompletedBarDemo {
  items = [
    {
      description: 'ECHR doesn\’t apply',
      action: 'Amend',
      state: 'Saved',
      click: function () {
        console.log('clicked Amend for \"ECHR doesn\'t apply\"');
      }
    },
    {
      description: 'Case strategy record',
      detailTitle: 'View case strategy',
      detail: 'Some content goes here...',
      action: 'Amend',
      state: '',
      click: function () {
        console.log('clicked Amend for \"Case strategy record\"');
      }
    },
    {
      description: 'Applications to court',
      detailTitle: 'View recommendations',
      detail: 'Some content goes here...',
      action: 'Amend',
      state: '',
      click: function () {
        console.log('clicked Amend for \"Applications to court\"');
      }
    }
  ];
}