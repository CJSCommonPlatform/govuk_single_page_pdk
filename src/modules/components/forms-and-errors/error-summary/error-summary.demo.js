"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ErrorSummaryDemo = (function () {
    function ErrorSummaryDemo() {
        this.fields = [
            { name: 'name', label: 'Full name' }
        ];
    }
    ErrorSummaryDemo.prototype.submitForm = function () {
        console.log('Submit form: This gets called only when form is valid');
    };
    ;
    ErrorSummaryDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./error-summary.demo.html')
        })
    ], ErrorSummaryDemo);
    return ErrorSummaryDemo;
}());
exports.ErrorSummaryDemo = ErrorSummaryDemo;
//# sourceMappingURL=error-summary.demo.js.map