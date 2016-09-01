import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    submitButtonText: '@',
    cancelLinkText: '@?',
    isDisplayedAnchor: '<?',
    onSubmit: '&',
    onCancel: '&'
  },
  template: require('./action-bar.component.html')
})
export class ActionBarComponent {
  isDisplayedAnchor: boolean = true;
  cancelLinkText: string = 'Cancel';
  onSubmit: () => void;
  onCancel: () => void;

  submit(): void {
    this.onSubmit();
  }

  cancel(): void {
    this.onCancel();
  }
}