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

  static $inject = ['$timeout'];

  private selectedIndex: number;

  constructor(private $timeout: ng.ITimeoutService) {
  }

  selectElement(elementIndex: number) {
    this.selectedIndex = elementIndex;
    this.selectedData = this.elements.length > 0 ? this.elements[this.selectedIndex].data : [];
    this.onClick();
  }

  $onChanges(changesObj: any) {
    if (changesObj !== undefined) {
      if (changesObj.defaultIndex && changesObj.defaultIndex.currentValue) {
        this.selectedIndex = this.defaultIndex === null ? 0 : this.defaultIndex;
      }
      if (changesObj.elements && changesObj.elements.currentValue) {
        this.selectElement(this.selectedIndex);
      }
    }
  }

}