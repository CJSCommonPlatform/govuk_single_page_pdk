"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
require('./page-cmp-2.1.scss');
var PageComponentTwoOne = (function () {
    function PageComponentTwoOne() {
        this.items = ['Alpha', 'Beta', 'Gamma'];
    }
    PageComponentTwoOne.prototype.setSelectedItem = function (value) {
        this.selectedItem = value;
    };
    PageComponentTwoOne = __decorate([
        angularjs_framework_1.Component({
            template: require('./page-cmp-2.1.html')
        })
    ], PageComponentTwoOne);
    return PageComponentTwoOne;
}());
exports.PageComponentTwoOne = PageComponentTwoOne;
//# sourceMappingURL=page-cmp-2.1.js.map