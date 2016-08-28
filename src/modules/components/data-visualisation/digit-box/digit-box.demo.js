"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var DigitBoxDemo = (function () {
    function DigitBoxDemo() {
        this.digit = 1234;
    }
    DigitBoxDemo = __decorate([
        angularjs_devtools_1.Component({
            template: "\n    <h2>Digit box</h2>\n    \n    <gov-tabset>\n    \n      <gov-tab heading=\"HTML Example\">\n        <docs-example language=\"markup\">\n          <div class=\"gov-digit-box\">1234</div>\n        </docs-example>\n      </gov-tab>\n    \n      <gov-tab heading=\"Angular Markup\">\n        <docs-example language=\"markup\">\n          <gov-digit-box digit=\"$ctrl.digit\"></gov-digit-box>\n        </docs-example>\n      </gov-tab>\n      \n    </gov-tabset>\n  "
        })
    ], DigitBoxDemo);
    return DigitBoxDemo;
}());
exports.DigitBoxDemo = DigitBoxDemo;
//# sourceMappingURL=digit-box.demo.js.map