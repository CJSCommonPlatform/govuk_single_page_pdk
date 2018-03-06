import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    title: '<',
    subtitle: '<',
    info:  '<',
    isHeading: '<'
  },
  template: require('./personal-details.component.html')
})
export class PersonalDetailsComponent {

  title: string;
  info:  string[];
}
