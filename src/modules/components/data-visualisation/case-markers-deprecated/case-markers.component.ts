import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    text: '<'
  },
  template: require('./case-markers.component.html')
})

export class CaseMarkersComponent {}
