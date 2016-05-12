import { Component } from '@govuk/angularjs-framework';

@Component({
  bindings: {
    label: '<',
    title: '<'
  },
  template: require('./persist-info.component.html')
})
export class PersistInfoComponent {}