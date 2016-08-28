"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var TabComponent = (function () {
    function TabComponent() {
    }
    Object.defineProperty(TabComponent.prototype, "active", {
        get: function () {
            return this.tabsetCtrl.isActive(this);
        },
        enumerable: true,
        configurable: true
    });
    TabComponent.prototype.$onInit = function () {
        this.tabsetCtrl.add(this);
    };
    TabComponent.prototype.$onDestroy = function () {
        this.tabsetCtrl.remove(this);
    };
    TabComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                heading: '@'
            },
            transclude: true,
            template: "\n        <div ng-if=\"$ctrl.active\" class=\"tabs-panel\" id=\"before-you-start\" role=\"tabpanel\">        \n          <div class=\"tabs-panel-inner\" tabindex=\"0\"  ng-transclude>\n          </div>\n        </div>  \n  ",
            require: {
                tabsetCtrl: '^govTabset'
            }
        })
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map