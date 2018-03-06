import { Component } from '@cppui/angularjs-devtools';

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
