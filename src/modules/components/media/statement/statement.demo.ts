import { Component } from '@govuk/angularjs-devtools';

require('./statement.scss');

@Component({
  template: require('./statement.demo.html')
})
export class StatementDemo {

  stmt: any = {
    fileSize: 576441,
    filename: 'Statement 1 from Linda Thomas.pdf',
    created:  Date.now(),
    length:   '2 pages'
  };

  onSelect(filename: string) {
    alert(filename);
  }
}