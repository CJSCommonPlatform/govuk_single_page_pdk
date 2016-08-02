import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    title: '<',
    subtitle: '<',
    info:  '<'
  },
  template: require('./personal-details.component.html')
})
export class PersonalDetailsComponent {

  title: string;
  info:  string[];
}