"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ActionBarComponent = (function () {
    function ActionBarComponent() {
        this.isDisplayedAnchor = true;
        this.cancelLinkText = 'Cancel';
    }
    ActionBarComponent.prototype.submit = function () {
        this.onSubmit();
    };
    ActionBarComponent.prototype.cancel = function () {
        this.onCancel();
    };
    ActionBarComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                submitButtonText: '@',
                cancelLinkText: '@?',
                isDisplayedAnchor: '<?',
                onSubmit: '&',
                onCancel: '&'
            },
            template: require('./action-bar.component.html')
        })
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=action-bar.component.js.map