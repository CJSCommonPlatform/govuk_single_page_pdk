"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var SearchComponent = (function () {
    function SearchComponent($element, $scope) {
        this.$element = $element;
        this.$scope = $scope;
    }
    SearchComponent.prototype.$postLink = function () {
        this.enableSubmitOnEnter();
        if (this.inline)
            this.makeInline();
    };
    SearchComponent.prototype.submit = function () {
        if (this.lazyValidationController)
            this.lazyValidationController.revalidate();
        if (this.ngModelCtrl.$valid)
            this.onSearch({ $event: this.ngModel });
    };
    SearchComponent.prototype.enableSubmitOnEnter = function () {
        var _this = this;
        this.$element.find('input').bind('keydown', function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                _this.$scope.$apply(function () { return _this.submit(); });
            }
        });
    };
    SearchComponent.prototype.makeInline = function () {
        this.$element.children().eq(0).addClass('gov-search-inline');
    };
    SearchComponent.$inject = ['$element', '$scope'];
    SearchComponent = __decorate([
        angularjs_devtools_1.Component({
            template: require('./search.component.html'),
            bindings: {
                autocomplete: '@',
                placeholder: '@',
                name: '@',
                inputId: '@',
                ariaDescribedby: '@',
                ngModel: '=',
                inline: '<?',
                ngMinlength: '@?',
                required: '<?',
                onSearch: '&'
            },
            require: {
                ngModelCtrl: 'ngModel',
                lazyValidationController: '^^?lazyValidation'
            }
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map