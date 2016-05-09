"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
var DirectiveA = (function () {
    function DirectiveA() {
    }
    DirectiveA.prototype.$onInit = function () {
        angular.extend(this.ngModel.$validators, {
            custom: function (val) {
                return val % 2 === 0;
            }
        });
    };
    DirectiveA = __decorate([
        angularjs_framework_1.Directive({
            require: {
                ngModel: 'ngModel'
            }
        })
    ], DirectiveA);
    return DirectiveA;
}());
exports.DirectiveA = DirectiveA;
//# sourceMappingURL=directive-a.js.map