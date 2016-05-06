import {Component} from '@govuk/angularjs-framework';

require('./cmp-2.1.scss');

@Component({
  bindings: {
    items:    '<',
    onSelect: '&'
  },
  template: require('./cmp-2.1.html')
})

export class ComponentTwoOne {

  items: string[] = [];
  onSelect: Function;

  select(value: string) {
    this.onSelect({$event: value});
  }
}