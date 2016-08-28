import formsErrors from '../forms-errors';

describe('components/forms-and-errors/action-bar', () => {

    let scope: any;
    let element: any;
    let button: any;
    let anchor: any;

    beforeEach(angular.mock.module(formsErrors));

    function compile(html: string) {
        inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
            scope = $rootScope.$new();
            element = $compile(html)(scope);
        });
    }

    it('there is a one-way binding to set value provided in button and default in anchor', () => {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" is-displayed-anchor="isDisplayedAnchor"></gov-action-bar>');
        scope.submitButton = 'Submit';
        scope.isDisplayedAnchor = false;
        scope.$apply();
        button = element.find('button');
        anchor = element.find('a');
        expect(button.text()).toEqual('Submit');
        expect(anchor.text()).toEqual('');
    });

    it('there is a one-way binding to set value provided in button and default in anchor', () => {
        compile('<gov-action-bar submit-button-text="{{submitButton}}"></gov-action-bar>');
        scope.submitButton = 'Submit';
        scope.$apply();
        button = element.find('button');
        anchor = element.find('a');
        expect(button.text()).toEqual('Submit');
        expect(anchor.text()).toEqual('Cancel');
    });

    it('there is a one-way binding to set value provided in button and value provided in anchor', () => {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" cancel-link-text="{{cancelLinkTest}}"></gov-action-bar>');
        scope.submitButton = 'Submit';
        scope.cancelLinkTest = 'Jump';
        scope.$apply();
        button = element.find('button');
        anchor = element.find('a');
        expect(button.text()).toEqual('Submit');
        expect(anchor.text()).toEqual('Jump');
    });

    it('invokes the `on-submit` callback when the button is clicked', () => {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" on-submit="submitCallback()"></gov-action-bar>');
        let text = null;
        scope.submitCallback = () => text = 'Callback of submit';
        scope.$digest();
        element.find('button').click();
        expect(text).toEqual('Callback of submit');
    });

    it('invokes the `on-cancel` callback when the link is clicked', () => {
        compile('<gov-action-bar submit-button-text="{{submitButton}}" on-cancel="cancelCallback()"></gov-action-bar>');
        let text = null;
        scope.cancelCallback = () => text = 'Callback of cancel';
        scope.$digest();
        element.find('a').click();
        expect(text).toEqual('Callback of cancel');
    });


});
