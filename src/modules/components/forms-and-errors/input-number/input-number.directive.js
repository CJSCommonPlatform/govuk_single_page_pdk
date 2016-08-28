"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var InputNumberDirective = (function () {
    function InputNumberDirective($element, $attrs) {
        this.$element = $element;
        this.$attrs = $attrs;
    }
    InputNumberDirective.prototype.$onInit = function () {
        var _this = this;
        var pad = parseInt(this.$attrs.inputNumberPad, 10);
        var inputMax = parseInt(this.$attrs.inputNumberMax, 10);
        // prevent input from containing any non-numeric characters
        this.ngModelCtrl.$parsers.push(function (val) {
            val = val.toString();
            var newVal = val.replace(/[^\d]/g, '').replace(/^0+(?=\d\.)/, '');
            if (newVal !== val) {
                _this.ngModelCtrl.$setViewValue(newVal);
                _this.ngModelCtrl.$render();
            }
            return newVal || newVal === '0' ? Number(newVal) : undefined;
        });
        // prevent any inputs that are greater than any specified max values
        this.ngModelCtrl.$parsers.unshift(function (val) {
            var tooLarge = angular.isDefined(inputMax) && !_this.ngModelCtrl.$isEmpty(val) && val > inputMax;
            if (tooLarge) {
                _this.ngModelCtrl.$setViewValue(_this.lastVal);
                _this.ngModelCtrl.$render();
                return _this.lastVal;
            }
            return val;
        });
        // pad single digits with leading zero(es)
        this.ngModelCtrl.$formatters.push(function (val) {
            if (Number(val) && pad) {
                val = val.toString();
                return val.length >= pad ? val : new Array(pad - val.length + 1).join('0') + val;
            }
            return val;
        });
        // remember current view value for times when we need to revert
        this.ngModelCtrl.$viewChangeListeners.push(function () {
            _this.lastVal = _this.ngModelCtrl.$viewValue;
        });
        // apply formatters on blur
        this.$element.bind('blur', function () {
            var val = _this.ngModelCtrl.$modelValue;
            var idx = _this.ngModelCtrl.$formatters.length;
            while (idx--) {
                val = _this.ngModelCtrl.$formatters[idx](val);
            }
            if (_this.ngModelCtrl.$viewValue !== val) {
                _this.ngModelCtrl.$viewValue = val;
                _this.ngModelCtrl.$render();
            }
        });
    };
    ;
    InputNumberDirective.$inject = ['$element', '$attrs'];
    InputNumberDirective = __decorate([
        angularjs_devtools_1.Directive({
            require: {
                ngModelCtrl: 'ngModel'
            }
        })
    ], InputNumberDirective);
    return InputNumberDirective;
}());
exports.InputNumberDirective = InputNumberDirective;
//# sourceMappingURL=input-number.directive.js.map