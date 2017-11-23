import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./dataset.component.html'),
  bindings: {
    onChange: '&?',
    description: '@',
    textLink: '@?',
    showLink: '<?'
  },
  transclude: true
})

export class DatasetComponent {
  showLink: boolean = true;
  textLink: string = 'Change';
};
