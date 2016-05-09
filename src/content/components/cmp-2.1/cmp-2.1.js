"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_framework_1 = require('@govuk/angularjs-framework');
require('./cmp-2.1.scss');
var ComponentTwoOne = (function () {
    function ComponentTwoOne() {
        this.items = [];
    }
    ComponentTwoOne.prototype.select = function (value) {
        this.onSelect({ $event: value });
    };
    ComponentTwoOne = __decorate([
        angularjs_framework_1.Component({
            bindings: {
                items: '<',
                onSelect: '&'
            },
            template: require('./cmp-2.1.html')
        })
    ], ComponentTwoOne);
    return ComponentTwoOne;
}());
exports.ComponentTwoOne = ComponentTwoOne;
//# sourceMappingURL=cmp-2.1.js.map