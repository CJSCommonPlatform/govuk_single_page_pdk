import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./search.demo.html')
})
export class SearchDemo {

  model: string;

  onSearch(text: string) {
    console.log(text);
  }
}