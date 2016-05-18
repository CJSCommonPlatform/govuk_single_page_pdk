import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    title: '<',
    elements: '<'
  },
  template: require('./timeline.component.html')
})
export class TimelineComponent {

}