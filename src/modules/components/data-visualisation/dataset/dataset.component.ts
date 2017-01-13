import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./dataset.component.html'),
  bindings: {
    onChange: '&?',
    description: '@',
    textLink: '@?'
  },
  transclude: true
})
export class DatasetComponent {
  textLink: string = 'Change';
};
