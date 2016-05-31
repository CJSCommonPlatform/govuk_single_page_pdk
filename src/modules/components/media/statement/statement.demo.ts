import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./statement.demo.html')
})
export class StatementDemo {

  statement: any = {
    fileSize: 576441,
    filename: 'Statement 1 from Linda Thomas.pdf',
    created:  Date.now(),
    length:   '2 pages'
  };

  onSelect(filename: string) {
    alert(filename);
  }
}