import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./error-summary.demo.html')
})
export class ErrorSummaryDemo {
  private fields = [
    { name: 'fullname', label: 'Full name'}
  ];

  submitForm(): void {
    console.log('Submit form: This gets called only when form is valid');
  };
}