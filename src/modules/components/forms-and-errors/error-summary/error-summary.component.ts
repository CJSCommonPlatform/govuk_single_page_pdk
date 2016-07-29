import { Component } from '@govuk/angularjs-devtools';

@Component({
    bindings: {
        form: '<',
        fields: '<'
    },
    template: require('./error-summary.component.html')
})
export class ErrorSummaryComponent {

    private fields: Array<any>;
    private form: ng.IFormController;

    constructor() {}

    invalidFields(): Array<any> {

        if (!this.form) {
            return [];
        }

        return this.fields.filter( field => {

            if (Boolean(this.form[field.name] &&
                    this.form[field.name].$error && Object.keys(this.form[field.name].$error).length)) {
                return field;
            }
        });
    }

}
