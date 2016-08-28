"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.$onChanges = function () {
        this._showIcon = this.showIcon === undefined ? true : this.showIcon;
    };
    NotificationComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                type: '@',
                showIcon: '<'
            },
            transclude: true,
            template: "\n    <div class=\"gov-notification {{$ctrl.type}}\">\n      <i class=\"gov-icon\" ng-if=\"$ctrl._showIcon\"></i>\n      <div class=\"gov-notification-body\" ng-transclude>\n      </div>\n    </div>  \n  "
        })
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map