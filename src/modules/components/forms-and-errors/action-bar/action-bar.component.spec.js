"use strict";
var forms_errors_1 = require('../forms-errors');
describe('components/forms-and-errors/action-bar', function () {
    var scope;
    var element;
    var button;
    var anchor;
    beforeEach(angular.mock.module(forms_errors_1["default"]));
    function compile(html) {
        inject(function ($compile, $rootScope) {
            scope = $rootScope.$new();
            element = $compile(html)(scope);
        });
    }
    it('there is a one-way binding to set value provided in button and default in anchor', function () {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" is-displayed-anchor="isDisplayedAnchor"></gov-action-bar>');
        scope.submitButton = 'Submit';
        scope.isDisplayedAnchor = false;
        scope.$apply();
        button = element.find('button');
        anchor = element.find('a');
        expect(button.text()).toEqual('Submit');
        expect(anchor.text()).toEqual('');
    });
    it('there is a one-way binding to set value provided in button and default in anchor', function () {
        compile('<gov-action-bar submit-button-text="{{submitButton}}"></gov-action-bar>');
        scope.submitButton = 'Submit';
        scope.$apply();
        button = element.find('button');
        anchor = element.find('a');
        expect(button.text()).toEqual('Submit');
        expect(anchor.text()).toEqual('Cancel');
    });
    it('there is a one-way binding to set value provided in button and value provided in anchor', function () {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" cancel-link-text="{{cancelLinkTest}}"></gov-action-bar>');
        scope.submitButton = 'Submit';
        scope.cancelLinkTest = 'Jump';
        scope.$apply();
        button = element.find('button');
        anchor = element.find('a');
        expect(button.text()).toEqual('Submit');
        expect(anchor.text()).toEqual('Jump');
    });
    it('invokes the `on-submit` callback when the button is clicked', function () {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" on-submit="submitCallback()"></gov-action-bar>');
        var text = null;
        scope.submitCallback = function () { return text = 'Callback of submit'; };
        scope.$digest();
        element.find('button').click();
        expect(text).toEqual('Callback of submit');
    });
    it('invokes the `on-cancel` callback when the link is clicked', function () {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" on-cancel="cancelCallback()"></gov-action-bar>');
        var text = null;
        scope.cancelCallback = function () { return text = 'Callback of cancel'; };
        scope.$digest();
        element.find('a').click();
        expect(text).toEqual('Callback of cancel');
    });
});
//# sourceMappingURL=action-bar.component.spec.js.map