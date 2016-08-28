"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var NoticeDemo = (function () {
    function NoticeDemo() {
    }
    NoticeDemo = __decorate([
        angularjs_devtools_1.Component({
            template: "\n    <h2 class=\"heading-medium\">Notice</h2>\n    <p>\n      Used to notify a user if there are legal consequences belonging to a subsequent action \u2013 \n      for example, a fine or prison sentence.\n    </p>\n    \n    <gov-tabset>\n    \n      <gov-tab heading=\"HTML Example\">\n        <docs-example language=\"markup\">\n          <div class=\"notice\">\n            <i class=\"icon icon-important\">\n              <span class=\"visuallyhidden\">Warning</span>\n            </i>\n            <strong class=\"bold-small\">\n              You can be fined up to \u00A35,000 if you don\u2019t register.\n            </strong>\n          </div>\n        </docs-example>\n      </gov-tab>\n    \n      <gov-tab heading=\"Angular Markup\">\n        <docs-example language=\"markup\">\n          <gov-notice>You can be fined up to \u00A35,000 if you don\u2019t register.</gov-notice>\n        </docs-example>\n      </gov-tab>\n    \n    </gov-tabset>  \n  "
        })
    ], NoticeDemo);
    return NoticeDemo;
}());
exports.NoticeDemo = NoticeDemo;
//# sourceMappingURL=notice.demo.js.map