"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
require('./page-cmp-3.1.scss');
var PageComponentThreeOne = (function () {
    function PageComponentThreeOne(_service) {
        this._service = _service;
    }
    // $onInit automatically invoked by angular when component bindings are
    // available to the controller
    PageComponentThreeOne.prototype.$onInit = function () {
        var _this = this;
        this.loading = true;
        this._service.doSomething()
            .then(function (values) { return _this.values = values; })
            .finally(function () { return _this.loading = false; });
    };
    PageComponentThreeOne.$inject = ['ServiceThreeOne'];
    PageComponentThreeOne = __decorate([
        angularjs_framework_1.Component({
            template: require('./page-cmp-3.1.html')
        })
    ], PageComponentThreeOne);
    return PageComponentThreeOne;
}());
exports.PageComponentThreeOne = PageComponentThreeOne;
//# sourceMappingURL=page-cmp-3.1.js.map