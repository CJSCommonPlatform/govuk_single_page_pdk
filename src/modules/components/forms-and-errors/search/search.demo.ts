import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./search.demo.html')
})
export class SearchDemo {

  model: string;
  private inputId = 'inputSearchId';
  private name = 'searchName';
  private autocomplete = true;
  private ariaDescribedBy = 'Aria description';
  private ngMinLength = 2;
  private results = {
    display: false,
    data: []
  };
  onSearch(text: string) {
    this.resultsHandler();
  }
  resultsHandler() {
    // Some data actions
    // Get data from service then add to results object below.
    this.results = {
      display: true,
      data: [
        {datum1: 'datum1'},
        {datum2: 'datum2'}
      ]
    };
  }
}