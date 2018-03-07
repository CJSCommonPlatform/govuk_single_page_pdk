import { Component } from '../../../../util/angular-utils';

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
