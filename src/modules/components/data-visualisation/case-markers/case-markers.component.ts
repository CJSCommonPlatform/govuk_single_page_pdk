import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    data: '<'
  },
  template: require('./case-markers.component.html')
})
export class CaseMarkersComponent {}