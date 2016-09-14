import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    label: '<',
    title: '<',
    warning: '<?',
    links: '<?'
  },
  template: require('./persist-info.component.html')
})
export class PersistInfoComponent {}