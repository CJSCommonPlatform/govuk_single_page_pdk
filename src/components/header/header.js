"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
var Header = (function () {
    function Header(_$state) {
        this._$state = _$state;
    }
    Header.prototype.includes = function (path) {
        return this._$state.includes(path);
    };
    Header.$inject = ['$state'];
    Header = __decorate([
        angularjs_framework_1.Component({
            template: require('./header.html')
        })
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map