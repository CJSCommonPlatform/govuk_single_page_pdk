import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    filters: '<',
    tableHeaders: '<',
    tableData: '<'
  },
  template: require('./filters.component.html')
})
export class FiltersComponent {

  filters: any;
  currentFilterIndex: number;
  activeFilter: any;

  $onInit(): void {

    // Select the filter that has been defined as active in the data
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].isActive) {
        this.selectFilter(i);
        break;
      }
    }

    // If no active filter has been defined in the data, 
    // select the first filter
    if (!this.currentFilterIndex) {
      this.selectFilter(0);
    }
  };

  selectFilter(selectedIndex: number): void {

    for (let i = 0; i < this.filters.length; i++) {
      this.filters[i].isActive = false;
    }
    this.filters[selectedIndex].isActive = true;

    this.currentFilterIndex = selectedIndex;
    this.activeFilter = this.filters[selectedIndex].filter;
  }

  changeFilter(event: KeyboardEvent): void {

    switch (event.keyCode) {
      // Left arrow key
      case 37:
        if (this.currentFilterIndex > 0) {
          this.selectFilter(this.currentFilterIndex - 1);
        }
        break;
      // Right arrow key
      case 39:
        if (this.currentFilterIndex < this.filters.length - 1) {
          this.selectFilter(this.currentFilterIndex + 1);
        }
        break;
      default:
        break;
    }
  }
}
