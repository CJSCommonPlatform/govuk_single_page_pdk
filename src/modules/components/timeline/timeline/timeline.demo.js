"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var TimelineDemo = (function () {
    function TimelineDemo() {
        this.timeline = {
            title: 'Timeline',
            elements: [
                {
                    dateTitle: 'Today',
                    description: 'Charging advice requested',
                    timestamp: '09:15AM',
                    actions: [
                        { title: 'Assign to me' },
                        { title: 'Review case', action: function () { console.log('Review case'); }, active: true },
                        { title: 'Enter your analysis and charging decision' }
                    ]
                },
                {
                    dateTitle: 'Yesterday',
                    description: 'Recorded analysis',
                    timestamp: '08:15AM',
                    actions: [
                        { title: 'Assign to me', action: function () { console.log('Assign to me'); }, active: true },
                        { title: 'Review case' },
                        { title: 'Enter your analysis and charging decision' }
                    ]
                }
            ]
        };
    }
    TimelineDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./timeline.demo.html')
        })
    ], TimelineDemo);
    return TimelineDemo;
}());
exports.TimelineDemo = TimelineDemo;
//# sourceMappingURL=timeline.demo.js.map