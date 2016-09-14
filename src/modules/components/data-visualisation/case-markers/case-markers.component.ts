import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    text: '<'
  },
  template: require('./case-markers.component.html')
})

export class CaseMarkersComponent {}