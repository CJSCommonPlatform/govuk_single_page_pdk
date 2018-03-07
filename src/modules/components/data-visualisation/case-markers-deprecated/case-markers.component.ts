import { Component } from '../../../../util/angular-utils';

@Component({
  bindings: {
    text: '<'
  },
  template: require('./case-markers.component.html')
})

export class CaseMarkersComponent {}
