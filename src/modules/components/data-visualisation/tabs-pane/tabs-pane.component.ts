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

  selectElement(elementIndex: number) {
    this.selectedIndex = elementIndex;
    this.selectedData = this.elements.length > 0 ? this.elements[this.selectedIndex].data : [];
    this.onClick({ focusedData: this.selectedData});
  }

  $onChanges(changesObj: any) {
    if (this.isDefaultIndexReady(changesObj)) {
      this.selectedIndex = this.defaultIndex;
    }
    if (this.isSelectElementReady(changesObj)) {
      this.selectElement(this.selectedIndex);
    }
  }

  isDefaultIndexReady(changesObj: any) {
    return (changesObj.defaultIndex) && (changesObj.defaultIndex.currentValue >= 0);
  }

  isSelectElementReady(changesObj: any) {
    return changesObj.elements && Array.isArray(changesObj.elements.currentValue)
      && changesObj.elements.currentValue.length > 0;
  }

}