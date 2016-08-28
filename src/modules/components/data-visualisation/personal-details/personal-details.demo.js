"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var PersonalDetailsDemo = (function () {
    function PersonalDetailsDemo() {
        this.title = 'Peter JAMES';
        this.subtitle = 'Suspect';
        this.info = [
            '30 years old',
            'Born 8 June 1985',
            'British',
            'Self-defined as White British',
            '14 Tottenham Court Road, London W1T 1JY'
        ];
    }
    PersonalDetailsDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./personal-details.demo.html')
        })
    ], PersonalDetailsDemo);
    return PersonalDetailsDemo;
}());
exports.PersonalDetailsDemo = PersonalDetailsDemo;
//# sourceMappingURL=personal-details.demo.js.map