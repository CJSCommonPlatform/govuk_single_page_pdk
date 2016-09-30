import { Component } from '@govuk/angularjs-devtools';
import { uuid } from '../../../../util/helpers';

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

  id: string;
  open: boolean;
  showText: string;
  hideText: string;

  constructor() {
    this.id = uuid();
  }

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