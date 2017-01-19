import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    open: '=?',
    showText: '<?',
    hideText: '<?'
  },
  transclude: {
    alwaysVisible: '?alwaysVisible',
    hideable:  '?hideable'
  },
  template: require('./show-hide-pane.component.html')
})
export class ShowHidePaneComponent {

  open: boolean;
  showText: string;
  hideText: string;

  $onInit() {
    if (this.open === undefined) {
      this.open = true;
    }
    if (this.showText === undefined) {
      this.showText = 'Show';
    }
    if (this.hideText === undefined) {
      this.hideText = 'Hide';
    }
  }

  toggle(): void {
    this.open = !this.open;
  }
}