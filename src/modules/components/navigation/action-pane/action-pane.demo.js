"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var ActionPaneDemo = (function () {
    function ActionPaneDemo() {
        this.title = 'Next tasks';
    }
    ActionPaneDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./action-pane.demo.html')
        })
    ], ActionPaneDemo);
    return ActionPaneDemo;
}());
exports.ActionPaneDemo = ActionPaneDemo;
//# sourceMappingURL=action-pane.demo.js.map