"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var TabsetComponent = (function () {
    function TabsetComponent() {
        this.tabs = [];
    }
    TabsetComponent.prototype.add = function (tab) {
        this.tabs.push(tab);
        if (!this.selected) {
            this.select(tab);
        }
    };
    TabsetComponent.prototype.isActive = function (tab) {
        return tab === this.selected;
    };
    TabsetComponent.prototype.remove = function (tab) {
        var idx = this.tabs.indexOf(tab);
        if (idx > -1) {
            this.tabs.splice(idx, 1);
        }
        this.select(this.tabs[0]);
    };
    TabsetComponent.prototype.select = function (tab) {
        this.selected = tab;
    };
    TabsetComponent = __decorate([
        angularjs_devtools_1.Component({
            template: "\n  <div class=\"tabs\">\n    <ul class=\"tabs-list\" role=\"tablist\">\n      <li role=\"presentation\" ng-repeat=\"tab in $ctrl.tabs\">\n        <a ng-click=\"$ctrl.select(tab)\" role=\"tab\" \n        tabindex=\"{{ tab.active ? '0':'-1'}}\" aria-selected=\"{{ tab.active ? 'true':'false'}}\" \n        aria-controls=\"{{tab.heading}}\" ng-bind=\"tab.heading\"></a>\n      </li>    \n    </ul>\n  </div>\n  <div class=\"tabs-content\" ng-transclude></div>",
            transclude: true
        })
    ], TabsetComponent);
    return TabsetComponent;
}());
exports.TabsetComponent = TabsetComponent;
//# sourceMappingURL=tabset.component.js.map