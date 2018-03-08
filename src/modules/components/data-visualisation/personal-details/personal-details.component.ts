import { Component } from '../../../../util/angular-utils';

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
