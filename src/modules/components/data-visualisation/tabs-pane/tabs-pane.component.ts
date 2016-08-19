import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    defaultIndex: '<',
    elements: '<',
    selectedData: '=',
    onClick: '&'
  },
  transclude: true,
  template: require('./tabs-pane.component.html')
})
export class TabsPaneComponent {

  defaultIndex: number;
  elements: { title: string; title2: string, subtitle: string; data: any; }[];
  selectedData: any;
  onClick: any;

  private selectedIndex: number;

  constructor() {
    if (this.defaultIndex != null) {
      this.selectElement(this.defaultIndex);
    }
  }

  selectElement(elementIndex: number) {
    this.selectedIndex = elementIndex;
    this.selectedData = this.elements[this.selectedIndex].data;
    this.onClick();
  }

}