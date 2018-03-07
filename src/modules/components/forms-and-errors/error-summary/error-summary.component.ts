import { Component } from '../../../../util/angular-utils';

@Component({
    bindings: {
        form: '<',
        fields: '<',
        title: '<?'
    },
    template: require('./error-summary.component.html')
})
export class ErrorSummaryComponent {

    private fields: Array<any>;
    private form: ng.IFormController;
    private title: String;

    constructor() {
        this.title = this.title || 'Fix the following';
    }

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
