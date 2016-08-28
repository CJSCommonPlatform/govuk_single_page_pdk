"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ActionBarDemo = (function () {
    function ActionBarDemo() {
    }
    ActionBarDemo.prototype.onSubmit = function () {
        console.log('On submit');
    };
    ActionBarDemo.prototype.onCancel = function () {
        console.log('On cancel');
    };
    ActionBarDemo = __decorate([
        angularjs_devtools_1.Component({
            template: "\n    <h2 class=\"heading-medium\">Action bar</h2>\n    <p>\n      This component provides the option to display success button to proceed and optional cancelation\n      link. The values as well as the functions that they should call must be provided.\n    </p>\n    \n    <gov-tabset>\n    \n      <gov-tab heading=\"HTML Example\">\n        <docs-example language=\"markup\">\n          <div class=\"action-bar\">\n              <button class=\"button\" ng-click=\"$ctrl.onSubmit()\">Submit</button>\n              <a href=\"\" ng-if=\"true\" ng-click=\"$ctrl.onCancel()\">Cancel</a>\n          </div>\n        </docs-example>\n      </gov-tab>\n    \n      <gov-tab heading=\"Angular Markup\">\n        <docs-example language=\"markup\">\n          <gov-action-bar submit-button-text=\"Submit\" on-submit=\"$ctrl.onSubmit()\" \n                            on-cancel=\"$ctrl.onCancel()\"></gov-action-bar>\n        </docs-example>\n      </gov-tab>\n      \n      <gov-tab heading=\"Data\">\n        <prismify language=\"javascript\">\n          this.onSubmit = function() {\n            console.log('On submit');\n          },\n           \n          this.onCancel = function() {\n            console.log('On cancel');\n          }\n        </prismify>\n      </gov-tab>\n    \n    </gov-tabset>  \n  "
        })
    ], ActionBarDemo);
    return ActionBarDemo;
}());
exports.ActionBarDemo = ActionBarDemo;
//# sourceMappingURL=action-bar.demo.js.map