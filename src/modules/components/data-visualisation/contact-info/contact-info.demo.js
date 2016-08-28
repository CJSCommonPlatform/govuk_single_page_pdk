"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ContactInfoDemo = (function () {
    function ContactInfoDemo() {
        this.person = {
            position: 'Supervisor officer',
            name: 'DS Amelia Hicks',
            phone: '0151 123 4567',
            email: 'hicksa@liverpool.police.uk'
        };
    }
    ContactInfoDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./contact-info.demo.html')
        })
    ], ContactInfoDemo);
    return ContactInfoDemo;
}());
exports.ContactInfoDemo = ContactInfoDemo;
//# sourceMappingURL=contact-info.demo.js.map