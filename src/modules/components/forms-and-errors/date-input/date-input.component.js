"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var DateInputComponent = (function () {
    function DateInputComponent($element, $scope, $timeout, $attrs, dateFilter) {
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$attrs = $attrs;
        this.dateFilter = dateFilter;
        this.DATE_FORMAT = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/;
        this.DATE_EXISTS = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; // tslint:disable-line:max-line-length
    }
    Object.defineProperty(DateInputComponent.prototype, "$viewValue", {
        // getter for obtaining the composite view value from the three inner inputs
        // in order to simulate a date being typed in a single field as a single value, the
        // $viewValue is undefined when any of the three inner inputs are empty
        get: function () {
            if (this.dateControl.$error.required) {
                return this.$attrs.dateInputFormat ? '' : undefined;
            }
            return pad(this.dayModel) + "-" + pad(this.monthModel) + "-" + this.yearModel;
        },
        enumerable: true,
        configurable: true
    });
    // propagate a blur effect to the container element so as to allow the component to
    // behave as if it were a regular input – we observe the next process tick such
    // that blur is triggered only when focus is lost from any inner input is not being
    // transferred to another inner input, thereby preventing an event flicker
    DateInputComponent.prototype.onInputBlur = function () {
        var _this = this;
        this.$timeout(function () {
            if ([_this.dayInput, _this.monthInput, _this.yearInput].indexOf(document.activeElement) === -1) {
                _this.ngModelCtrl.$setTouched();
                _this.$element.triggerHandler('blur');
                _this.isFocused = false;
            }
        });
    };
    // trigger an update of the outer ng-model whenever an inner input changes
    DateInputComponent.prototype.onInputChange = function () {
        this.ngModelCtrl.$setViewValue(this.$viewValue);
    };
    // propagate a focus event to the container element so as to allow the component
    // to behave as if it were a regular input
    DateInputComponent.prototype.onInputFocus = function () {
        if (!this.isFocused) {
            this.$element.triggerHandler('focus');
            this.isFocused = true;
        }
    };
    DateInputComponent.prototype.$onChanges = function () {
        this.maxDate = this.dateInputMax ? new Date(this.dateInputMax) : undefined;
        this.minDate = this.dateInputMin ? new Date(this.dateInputMin) : undefined;
        this.ngModelCtrl.$validate();
    };
    DateInputComponent.prototype.$postLink = function () {
        var _this = this;
        this.identifier = "date-input-" + this.$scope.$id;
        // when a parent form exists, remove the inner ng-form as a control such that the
        // inner inputs are hidden from the parent form
        if (this.parentFormCtrl) {
            this.parentFormCtrl.$removeControl(this.dateControl);
        }
        this.dayInput = this.$element[0].querySelector('[name=dateDay]');
        this.monthInput = this.$element[0].querySelector('[name=dateMonth]');
        this.yearInput = this.$element[0].querySelector('[name=dateYear]');
        // store valid values as a date object, so that they can be universally consumed
        // and offer a predictable type for additional validators
        this.ngModelCtrl.$parsers.push(function (v) { return v ? new Date(v.split('-').reverse().join('-')) : v; });
        if (this.$attrs.dateInputFormat) {
            this.ngModelCtrl.$parsers.push(function (v) { return v ? _this.dateFilter(v, _this.$attrs.dateInputFormat) : v; });
        }
        // convert model value back to the composite $viewValue (see getter above)
        this.ngModelCtrl.$formatters.push(function (val) {
            if (val) {
                return toDateString(val);
            }
        });
        // additional validators:
        // these run against the $viewValue rather than the $modelValue, as the javascript
        // Date constructor used by the model value (via the $parsers) transforms invalid dates
        // into valid ones (e.g. 30/02/2015 => 02/03/2015)
        // NOTE: these validators do NOT run when the view value is empty, so as to prevent
        // errors being raised on an optional ng-model
        // `dateFormat` ensures that the view value corresponds to a dd/mm/yyyy digit format
        // `dateExists` ensures that the date itself exists (days in month, leap years etc)
        // `dateMax`    ensures that the date is less than or equal to the evaluated date
        // `dateMin`    ensures that the date is greater than or equal to the evaluated date
        this.ngModelCtrl.$validators['dateFormat'] = function (m, v) { return !v || _this.DATE_FORMAT.test(v); };
        this.ngModelCtrl.$validators['dateExists'] = function (m, v) { return !v || _this.DATE_EXISTS.test(v); };
        this.ngModelCtrl.$validators['dateMax'] = function (m) {
            if (!m || !_this.maxDate) {
                return true;
            }
            return Boolean(_this.maxDate - new Date(m) >= 0);
        };
        this.ngModelCtrl.$validators['dateMin'] = function (m) {
            if (!m || !_this.minDate) {
                return true;
            }
            return Boolean(new Date(m) - _this.minDate >= 0);
        };
        // update inner inputs when outer ng-model value is set directly
        this.ngModelCtrl.$render = function () {
            var val = _this.ngModelCtrl.$modelValue === null ? undefined : _this.ngModelCtrl.$modelValue;
            var date = new Date(val);
            if (date) {
                _this.dayModel = date.getDate();
                _this.monthModel = date.getMonth() + 1;
                _this.yearModel = date.getFullYear();
            }
        };
    };
    DateInputComponent.$inject = ['$element', '$scope', '$timeout', '$attrs', 'dateFilter'];
    DateInputComponent = __decorate([
        angularjs_devtools_1.Component({
            template: require('./date-input.component.html'),
            bindings: {
                dateInputMin: '<',
                dateInputMax: '<',
                dayLabel: '@',
                monthLabel: '@',
                yearLabel: '@'
            },
            require: {
                parentFormCtrl: '?^^form',
                ngModelCtrl: 'ngModel'
            }
        })
    ], DateInputComponent);
    return DateInputComponent;
}());
exports.DateInputComponent = DateInputComponent;
function toDateString(val) {
    val = new Date(val);
    return val.getDate() + "-" + (val.getMonth() + 1) + "-" + val.getFullYear();
}
function pad(num) {
    var val = num !== undefined ? num.toString() : '';
    return val.length >= 2 ? val : new Array(2 - val.length + 1).join('0') + val;
}
//# sourceMappingURL=date-input.component.js.map