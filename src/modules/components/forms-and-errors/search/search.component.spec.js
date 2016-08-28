"use strict";
var forms_errors_1 = require('../forms-errors');
describe('components/forms-and-errors/search', function () {
    var scope;
    var element;
    var input;
    var controller;
    beforeEach(angular.mock.module(forms_errors_1["default"]));
    function compile(html) {
        inject(function ($compile, $rootScope) {
            scope = $rootScope.$new();
            element = $compile(html)(scope);
            input = element.find('input');
            controller = element.data('$govSearchController');
            scope.$digest();
        });
    }
    function enterKeydown() {
        var event = jQuery.Event('keydown', { keyCode: 13 });
        sinon.stub(event, 'preventDefault');
        input.triggerHandler(event);
        return event;
    }
    it('there is a two-way binding between the outer and inner ng-model', function () {
        compile('<gov-search ng-model="model"></gov-search>');
        // outer -> inner
        scope.model = 'foo';
        scope.$digest();
        expect(input.val()).toEqual('foo');
        // inner -> outer
        input.val('bar').triggerHandler('change');
        expect(scope.model).toEqual('bar');
    });
    it('invokes the `on-search` callback when the search button is clicked', function () {
        compile('<gov-search ng-model="model" on-search="callback($event)"></gov-search>');
        var text = null;
        scope.model = 'foo';
        scope.callback = function (str) { return text = str; };
        scope.$digest();
        element.find('button').click();
        expect(text).toEqual('foo');
    });
    it('invokes the `on-search` callback when the enter key is pressed', function () {
        compile('<gov-search ng-model="model" on-search="callback($event)"></gov-search>');
        var text = null;
        scope.model = 'foo';
        scope.callback = function (str) { return text = str; };
        scope.$digest();
        var event = enterKeydown();
        expect(event.preventDefault.callCount).toEqual(1);
        expect(text).toEqual('foo');
    });
    it('disables the `on-search` callback when the model is invalid', function () {
        compile('<gov-search required ng-model="model" on-search="callback($event)"></gov-search>');
        var called = false;
        scope.callback = function (str) { return called = true; };
        element.find('button').triggerHandler('click');
        expect(called).toBe(false);
        enterKeydown();
        expect(called).toBe(false);
    });
    it('calls revalidate on the lazy validation controller on submit attempt', function () {
        compile('<gov-search ng-model="model"></gov-search>');
        var lazyValidationCtrl = { revalidate: sinon.spy() };
        controller.lazyValidationController = lazyValidationCtrl;
        element.find('button').triggerHandler('click');
        expect(lazyValidationCtrl.revalidate).toHaveBeenCalled();
    });
    it('applies the outer `name`, `placeholder` and `autocomplete` attributes to the inner input', function () {
        compile("<gov-search name=\"foo\" placeholder=\"Search\" autocomplete=\"on\" ng-model=\"model\"></gov-search>");
        expect(element.find('input').attr('name')).toEqual('foo');
        expect(element.find('input').attr('placeholder')).toEqual('Search');
        expect(element.find('input').attr('autocomplete')).toEqual('on');
    });
    it('applies the outer `input-id` and `aria-describedby` attributes to the inner input', function () {
        compile("<gov-search input-id=\"inputid\" aria-describedby=\"someid\" ng-model=\"model\"></gov-search>");
        expect(element.find('input').attr('id')).toEqual('inputid');
        expect(element.find('input').attr('aria-describedby')).toEqual('someid');
    });
    it('applies the outer `ng-minlength` attribute to the inner input', function () {
        compile("<gov-search ng-minlength=\"3\" ng-model=\"model\"></gov-search>");
        expect(element.find('input').attr('ng-minlength')).toEqual('3');
    });
    it('applies the gov-search-inline class when inline attribute is set', function () {
        compile("<gov-search inline=\"true\" ng-model=\"model\"></gov-search>");
        expect(element.find('.gov-search-input').hasClass('gov-search-inline')).toBe(true);
    });
    it("doesn't apply the gov-search-inline class when inline attribute is not set", function () {
        compile("<gov-search inline=\"false\" ng-model=\"model\"></gov-search>");
        expect(element.find('.gov-search-input').hasClass('gov-search-inline')).toBe(false);
    });
    it("applies ng-required attribute to the inner input when the required attribute is set", function () {
        compile("<gov-search required=\"true\" ng-model=\"model\"></gov-search>");
        expect(element.find('input').attr('ng-required')).toEqual('true');
    });
    it("does not apply required attribute to the inner input when the required attribute is not set", function () {
        compile("<gov-search ng-model=\"model\"></gov-search>");
        expect(element.find('input').attr('ng-required')).toEqual('');
    });
});
//# sourceMappingURL=search.component.spec.js.map