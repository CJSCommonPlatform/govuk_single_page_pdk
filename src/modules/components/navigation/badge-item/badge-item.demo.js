"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var BadgeItemDemo = (function () {
    function BadgeItemDemo() {
        this.items = [
            {
                description: 'Test 1', count: 5, click: function () {
                    console.log('clicked');
                }
            },
            {
                description: 'Test 2', count: 3, selected: true, click: function () {
                    console.log('clicked');
                }
            }
        ];
    }
    BadgeItemDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./badge-item.demo.html')
        })
    ], BadgeItemDemo);
    return BadgeItemDemo;
}());
exports.BadgeItemDemo = BadgeItemDemo;
//# sourceMappingURL=badge-item.demo.js.map