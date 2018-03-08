import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    title: '<',
    elements: '<'
  },
  template: require('./timeline.component.html')
})
export class TimelineComponent {
  name = 'Ben';
}
