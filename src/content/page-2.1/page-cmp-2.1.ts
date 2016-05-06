import {Component} from '@govuk/angularjs-framework';

require('./page-cmp-2.1.scss');

@Component({
  template: require('./page-cmp-2.1.html')
})

export class PageComponentTwoOne {

  items: string[] = ['Alpha', 'Beta', 'Gamma'];
  selectedItem: string;

  setSelectedItem(value: string) {
    this.selectedItem = value;
  }
}