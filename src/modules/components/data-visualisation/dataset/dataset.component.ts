import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./dataset.component.html'),
  bindings: {
    onChange: '&?',
    description: '@'
  },
  transclude: true
})
export class DatasetComponent { };
