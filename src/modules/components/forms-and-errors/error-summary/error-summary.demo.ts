import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./error-summary.demo.html')
})
export class ErrorSummaryDemo {
  private fields = [
    { name: 'name', label: 'Full name'}
  ];

  submitForm(): void {
    console.log('Submit form: This gets called only when form is valid');
  };
}
