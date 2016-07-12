import { Component } from '@govuk/angularjs-devtools';

@Component({
    bindings: {
        inputModel: '<',
        inputType: '@',
        customValidation: '<',
        language: '@'
    },
    template: require('./error-message.component.html')
})
export class ErrorMessageComponent {

    private inputModel: ng.INgModelController;
    private inputType: string;
    private customValidation: any;
    private errorMessages: any = {
        'en': {
            'input': {
                'required': 'Provide this information',
                'email': 'Email not valid – enter correct address'
            },
            'email': {
                'email': 'Email not valid – enter correct address'
            },
            'textarea': {
                'required': 'Provide this information'
            },
            'radio': {
                'required': 'Choose an answer'
            },
            'checkbox': {
                'required': 'Choose at least one answer'
            },
            'date': {
                'required': 'Provide this information',
                'past': 'Date can\'t be in future – enter valid date',
                'future': 'Date can\'t be in past – enter valid date',
                'minage': 'Age too young – enter valid date of birth',
                'dateFormat': 'Date not recognised – use format, for example 19 8 2016',
                'dateExists': 'Date doesn\'t exist – enter again'
            }

        }
    };

    private language: string;

    $onInit() {
        if (this.language === undefined) this.language = 'en';
        if (this.inputType === undefined) this.inputType = 'input';
        if (this.customValidation) angular.merge(this.errorMessages, this.customValidation);
    }

    getMessage(error: any): string {
        let response = '';

        if (error && JSON.stringify(error) !== JSON.stringify({})) {
            let key = Object.keys(error)[0];
            response =  this.errorMessages[this.language][this.inputType][key];
        }
        return response;
    }
}
