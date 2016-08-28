"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var PersistInfoDemo = (function () {
    function PersistInfoDemo() {
        this.label = '55DP0028116';
        this.title = "E. COWAN, E. MICHAELS AND W. PICKUP";
        this.links = [
            {
                title: 'Case Options',
                onClick: function () {
                    console.log('Case options');
                }
            },
            {
                title: 'Notifications',
                onClick: function () {
                    console.log('Notifications');
                }
            }
        ];
    }
    PersistInfoDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./persist-info.demo.html')
        })
    ], PersistInfoDemo);
    return PersistInfoDemo;
}());
exports.PersistInfoDemo = PersistInfoDemo;
//# sourceMappingURL=persist-info.demo.js.map