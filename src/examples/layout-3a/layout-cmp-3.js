"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
require('./layout-cmp-3.scss');
var LayoutComponentThree = (function () {
    function LayoutComponentThree() {
    }
    LayoutComponentThree = __decorate([
        angularjs_framework_1.Component({
            template: require('./layout-cmp-3.html')
        })
    ], LayoutComponentThree);
    return LayoutComponentThree;
}());
exports.LayoutComponentThree = LayoutComponentThree;
//# sourceMappingURL=layout-cmp-3.js.map