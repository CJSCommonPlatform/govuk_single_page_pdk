"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ErrorSummaryComponent = (function () {
    function ErrorSummaryComponent() {
    }
    ErrorSummaryComponent.prototype.invalidFields = function () {
        var _this = this;
        if (!this.form) {
            return [];
        }
        return this.fields.filter(function (field) {
            if (Boolean(_this.form[field.name] &&
                _this.form[field.name].$error && Object.keys(_this.form[field.name].$error).length)) {
                return field;
            }
        });
    };
    ErrorSummaryComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                form: '<',
                fields: '<'
            },
            template: require('./error-summary.component.html')
        })
    ], ErrorSummaryComponent);
    return ErrorSummaryComponent;
}());
exports.ErrorSummaryComponent = ErrorSummaryComponent;
//# sourceMappingURL=error-summary.component.js.map