import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./tabs-pane.demo.html')
})
export class TabsPaneDemo {

  selectedData: any;

  demoElements = [
    {
      title: 'Ronald',
      title2: 'LENNON',
      subtitle: 'age 29',
      data: {
        fistName: 'Ronald',
        lastName: 'LENNON',
        dateOfBirth: '1987-06-06',
        age: 29,
        bailStatus: 'In custody'
      }
    },
    {
      title: 'Edward',
      title2: 'HARRISON',
      subtitle: 'age 39',
      data: {
        fistName: 'Edward',
        lastName: 'HARRISON',
        dateOfBirth: '1979-02-14',
        age: 39,
        bailStatus: 'Not in custody'
      }
    },
    {
      title: 'William',
      title2: 'DONALDSON',
      subtitle: 'age 33',
      data: {
        fistName: 'William',
        lastName: 'DONALDSON',
        dateOfBirth: '1983-01-07',
        age: 33,
        bailStatus: 'In custody'
      }
    }
  ];

  doSomething(something: any) {
    console.log(something);
  }
}