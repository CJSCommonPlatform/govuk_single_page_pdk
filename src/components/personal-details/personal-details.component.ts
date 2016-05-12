import { Component } from '@govuk/angularjs-framework';

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