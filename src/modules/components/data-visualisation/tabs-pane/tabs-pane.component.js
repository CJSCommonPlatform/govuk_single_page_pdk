"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var TabsPaneComponent = (function () {
    function TabsPaneComponent() {
    }
    TabsPaneComponent.prototype.selectElement = function (elementIndex) {
        this.selectedIndex = elementIndex;
        this.selectedData = this.elements.length > 0 ? this.elements[this.selectedIndex].data : [];
        this.onClick({ focusedData: this.selectedData });
    };
    TabsPaneComponent.prototype.$onChanges = function (changesObj) {
        if (changesObj) {
            if (changesObj.defaultIndex && changesObj.defaultIndex.currentValue !== undefined) {
                this.selectedIndex = this.defaultIndex === null ? 0 : this.defaultIndex;
            }
            if (changesObj.elements && changesObj.elements.currentValue) {
                this.selectElement(this.selectedIndex);
            }
        }
    };
    TabsPaneComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                defaultIndex: '<',
                elements: '<',
                selectedData: '=',
                onClick: '&'
            },
            transclude: true,
            template: require('./tabs-pane.component.html')
        })
    ], TabsPaneComponent);
    return TabsPaneComponent;
}());
exports.TabsPaneComponent = TabsPaneComponent;
//# sourceMappingURL=tabs-pane.component.js.map