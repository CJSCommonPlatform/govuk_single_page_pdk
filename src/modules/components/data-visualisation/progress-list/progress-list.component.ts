import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./progress-list.component.html'),
  bindings: {
    steps: '<',
    showNumbers: '<'  // not in use anymore
  }
})
export class ProgressListComponent {

  steps: { active: boolean; complete: boolean; label: string }[];
  showNumbers: boolean; // not in use anymore
}
