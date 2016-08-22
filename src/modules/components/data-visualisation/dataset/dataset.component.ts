import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./dataset.component.html'),
  bindings: {
    onChange: '&?'
  },
  transclude: true
})
export class DatasetComponent { };
