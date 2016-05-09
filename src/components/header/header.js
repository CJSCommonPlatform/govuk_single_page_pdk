"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
var HeaderCmp = (function () {
    function HeaderCmp(_$state) {
        this._$state = _$state;
    }
    HeaderCmp.prototype.includes = function (path) {
        return this._$state.includes(path);
    };
    HeaderCmp.$inject = ['$state'];
    HeaderCmp = __decorate([
        angularjs_framework_1.Component({
            template: require('./header.html')
        })
    ], HeaderCmp);
    return HeaderCmp;
}());
exports.HeaderCmp = HeaderCmp;
//# sourceMappingURL=header.js.map