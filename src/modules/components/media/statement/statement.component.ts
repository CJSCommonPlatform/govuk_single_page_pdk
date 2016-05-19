import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    preview:         '<',
    statementDate:   '<',
    statementLength: '<',
    fileSize:        '<',
    fileName:        '<',
    onSelect:        '&'
  },
  template: require('./statement.component.html')
})
export class StatementComponent {

  statementDate: string;
  statementLength: string;
  fileName: string;
  fileSize: number | string;
  onSelect: Function;
  
  onClick() {
    this.onSelect({$event: this.fileName});
  }
}