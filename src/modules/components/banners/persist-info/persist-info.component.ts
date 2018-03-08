import { Component } from '../../../../util/angular-utils';

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
