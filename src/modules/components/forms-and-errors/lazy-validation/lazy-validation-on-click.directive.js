"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var LazyValidationOnClickDirective = (function () {
    function LazyValidationOnClickDirective($element, $window, $attrs, smoothScroll, $scope) {
        this.$element = $element;
        this.$window = $window;
        this.$attrs = $attrs;
        this.smoothScroll = smoothScroll;
        this.$scope = $scope;
    }
    LazyValidationOnClickDirective.prototype.$postLink = function () {
        var _this = this;
        this.$element.bind('click', function () {
            _this.$scope.$apply(_this.revalidateAndRunCallbackIfDefined.bind(_this));
        });
    };
    ;
    LazyValidationOnClickDirective.prototype.revalidateAndRunCallbackIfDefined = function () {
        this.lazyValidationController.revalidate();
        if (this.lazyValidationController.isValid() && this.ifValidCallback) {
            this.ifValidCallback();
        }
        else {
            var id = this.$attrs.movePageTo;
            var elem = this.$window.document.getElementById(id);
            if (elem) {
                this.smoothScroll(elem);
            }
        }
    };
    ;
    LazyValidationOnClickDirective.$inject = ['$element', '$window', '$attrs', 'smoothScroll', '$scope'];
    LazyValidationOnClickDirective = __decorate([
        angularjs_devtools_1.Directive({
            restrict: 'A',
            require: {
                lazyValidationController: '^^lazyValidation'
            },
            bindToController: true,
            controllerAs: '$ctrl',
            scope: {
                ifValidCallback: '&?lazyValidationOnClick'
            }
        })
    ], LazyValidationOnClickDirective);
    return LazyValidationOnClickDirective;
}());
exports.LazyValidationOnClickDirective = LazyValidationOnClickDirective;
//# sourceMappingURL=lazy-validation-on-click.directive.js.map