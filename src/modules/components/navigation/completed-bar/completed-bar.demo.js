"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var CompletedBarDemo = (function () {
    function CompletedBarDemo() {
        this.items = [
            {
                description: 'Provided plea issues',
                subDescription: 'Acceptable for a guilty plea to s.20 wounding or inflicitng grievous bodily..',
                action: 'Amend',
                state: '',
                click: function () {
                    console.log('clicked');
                }
            },
            {
                description: 'Proposed charge authorised',
                subDescription: '',
                action: 'Amend',
                state: 'Saved',
                click: function () {
                    console.log('clicked');
                }
            }
        ];
    }
    CompletedBarDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./completed-bar.demo.html')
        })
    ], CompletedBarDemo);
    return CompletedBarDemo;
}());
exports.CompletedBarDemo = CompletedBarDemo;
//# sourceMappingURL=completed-bar.demo.js.map