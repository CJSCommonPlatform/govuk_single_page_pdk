import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: require('./personal-details.demo.html')
})
export class PersonalDetailsDemo {

  private title = 'Peter JAMES';

  private subtitle = 'Suspect';

  private info = [
    '30 years old',
    'Born 8 June 1985',
    'British',
    'Self-defined as White British',
    '14 Tottenham Court Road, London W1T 1JY'
  ];
}
