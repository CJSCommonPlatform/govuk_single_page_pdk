import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./progress-list.component.html'),
  bindings: {
    steps: '<'
  }
})
export class ProgressListComponent {

  steps: { active: boolean; complete: boolean; label: string }[];
}