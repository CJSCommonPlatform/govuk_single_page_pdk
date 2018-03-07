import { Component } from '../../../../util/angular-utils';

@Component({
    template: require('./error-message.demo.html')
})
export class ErrorMessageDemo {
    private customValidation = {
        'en': {
            'input': {
                'minlength': 'The value must be at least 5 characters long',
                'maxlength': 'The value must not have more than 10 characters long'
            }
        }
    };

    private fields = [
        { name: 'name', label: 'Full name'},
        { name: 'surname', label: 'Last name'}
    ];

    submitForm(): void {
        console.log('Submit form: This gets called only when form is valid');
    };
}
