"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var TabsPaneDemo = (function () {
    function TabsPaneDemo() {
        this.demoElements = [
            {
                title: 'Ronald',
                title2: 'LENNON',
                subtitle: 'age 29',
                data: {
                    fistName: 'Ronald',
                    lastName: 'LENNON',
                    dateOfBirth: '1987-06-06',
                    age: 29,
                    bailStatus: 'In custody'
                }
            },
            {
                title: 'Edward',
                title2: 'HARRISON',
                subtitle: 'age 39',
                data: {
                    fistName: 'Edward',
                    lastName: 'HARRISON',
                    dateOfBirth: '1979-02-14',
                    age: 39,
                    bailStatus: 'Not in custody'
                }
            },
            {
                title: 'William',
                title2: 'DONALDSON',
                subtitle: 'age 33',
                data: {
                    fistName: 'William',
                    lastName: 'DONALDSON',
                    dateOfBirth: '1983-01-07',
                    age: 33,
                    bailStatus: 'In custody'
                }
            }
        ];
    }
    TabsPaneDemo.prototype.doSomething = function (something) {
        console.log(something);
    };
    TabsPaneDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./tabs-pane.demo.html')
        })
    ], TabsPaneDemo);
    return TabsPaneDemo;
}());
exports.TabsPaneDemo = TabsPaneDemo;
//# sourceMappingURL=tabs-pane.demo.js.map