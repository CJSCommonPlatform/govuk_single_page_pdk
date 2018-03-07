import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./errors.component.html')
})
export class ErrorsPage {
  private form: any;

  private fields = [
        { name: 'fullname', label: 'Full name'}
  ];

  submitForm(): void {
    console.log('Submit form: This gets called only when form is valid');
  };

  checkValidationManually(): void {
    // Check additional criteria before submitting the form
    if (this.form.$valid) {
      this.submitForm();
    }
  };
}
