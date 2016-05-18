import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    title: '<',
    info:  '<'
  },
  template: require('./personal-details.component.html')
})
export class PersonalDetailsComponent {

  title: string;
  info:  string[];
}