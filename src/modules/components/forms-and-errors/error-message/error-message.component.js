"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ErrorMessageComponent = (function () {
    function ErrorMessageComponent() {
        this.errorMessages = {
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
    }
    ErrorMessageComponent.prototype.$onChanges = function () {
        if (this.language === undefined)
            this.language = 'en';
        if (this.inputType === undefined)
            this.inputType = 'input';
        if (this.customValidation) {
            angular.merge(this.errorMessages, this.customValidation);
        }
    };
    ErrorMessageComponent.prototype.getMessage = function (error) {
        var response = '';
        if (error && JSON.stringify(error) !== JSON.stringify({})) {
            var key = Object.keys(error)[0];
            response = this.errorMessages[this.language][this.inputType][key];
        }
        return response;
    };
    ErrorMessageComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                inputModel: '<',
                inputType: '@',
                customValidation: '<',
                language: '@'
            },
            template: require('./error-message.component.html')
        })
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());
exports.ErrorMessageComponent = ErrorMessageComponent;
//# sourceMappingURL=error-message.component.js.map