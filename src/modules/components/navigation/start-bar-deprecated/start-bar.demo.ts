import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./start-bar.demo.html')
})
export class StartBarDemo {
  items = [
    {
      description: 'Record case strengths, weaknesses and strategy',
      click: function () {
        console.log('clicked \"Record case strengths, weaknesses and strategy\"');
      }
    },
    {
      description: 'Consider European Convention on Human Rights',
      click: function () {
        console.log('clicked \"Consider European Convention on Human Rights\"');
      }
    },
    {
      description: 'Recommend applications to court',
      click: function () {
        console.log('clicked \"Recommend applications to court\"');
      }
    },
    {
      description: 'Where should case be heard?',
      click: function () {
        console.log('clicked \"Where should case be heard?\"');
      }
    },
    {
      description: 'Anticipate contested issues',
      click: function () {
        console.log('clicked \"Anticipate contested issues\"');
      }
    }
  ];

  i2tCcrItem = {
    description: 'Order more information',
    click: function() {
      console.log('clicked \"Order more information\"');
    }
  };
}