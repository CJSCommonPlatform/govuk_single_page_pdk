"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var TopMenuDemo = (function () {
    function TopMenuDemo() {
        var _this = this;
        this.menu = {
            items: [
                {
                    text: 'First page',
                    isActive: true
                },
                {
                    text: 'Second page',
                    isSeparated: true
                },
                {
                    text: 'Third page'
                }
            ]
        };
        this.onMenuItemClick = function (items, currentItem) {
            if (!currentItem.isActive) {
                _this.activateItem(items, currentItem);
            }
        };
        this.activateItem = function (items, currentItem) {
            items.forEach(function (item) { return item.isActive = item === currentItem; });
        };
    }
    TopMenuDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./top-menu.demo.html')
        })
    ], TopMenuDemo);
    return TopMenuDemo;
}());
exports.TopMenuDemo = TopMenuDemo;
;
//# sourceMappingURL=top-menu.demo.js.map