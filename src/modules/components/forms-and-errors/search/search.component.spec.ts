import formsErrors from '../forms-errors';

describe('components/forms-and-errors/search', () => {

  let scope: any;
  let element: any;
  let input: any;
  let controller: any;
  let formController: any;

  beforeEach(angular.mock.module(formsErrors));

  function compile(html: string) {
    inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
      scope = $rootScope.$new();
      element = $compile(html)(scope);
      input = element.find('input');
      formController = element.data('$formController');
      controller = element.children().data('$govSearchController');
      scope.$digest();
    });
  }

  function enterKeydown() {
    const event = jQuery.Event('keydown', {keyCode: 13});
    sinon.stub(event, 'preventDefault');
    input.triggerHandler(event);
    return <any> event;
  }

  function mockFormController(options) {
    formController.criteria.$viewValue = options.$viewValue;
    formController.criteria.$valid = options.$valid;
    formController.criteria.$invalid = !options.$valid;
    formController.$valid = options.$valid;
    formController.$invalid = !options.$valid;
  }

  it('there is a two-way binding between the outer and inner ng-model', () => {
    compile('<form><gov-search ng-model="model"></gov-search></form>');
    // outer -> inner
    scope.model = 'foo';
    scope.$digest();
    expect(input.val()).toEqual('foo');
    // inner -> outer
    input.val('bar').triggerHandler('change');
    expect(scope.model).toEqual('bar');
  });

  it('invokes the `on-search` callback when the search button is clicked', () => {
    compile('<form><gov-search ng-model="model" on-search="callback($criteria)"></gov-search></form>');
    let text = null;
    scope.model = 'foo';
    scope.callback = str => text = str;
    scope.$digest();
    element.find('button').click();
    expect(text).toEqual('foo');
  });

  it('invokes the `on-search` callback when the enter key is pressed', () => {
    compile('<form><gov-search ng-model="model" on-search="callback($criteria)"></gov-search></form>');
    let text = null;
    scope.model = 'foo';
    scope.callback = str => text = str;
    scope.$digest();
    const event = enterKeydown();
    expect(event.preventDefault.callCount).toEqual(1);
    expect(text).toEqual('foo');
  });

  it('disables the `on-search` callback when the model is invalid', () => {
    compile('<form><gov-search required ng-model="model" on-search="callback($criteria)"></gov-search></form>');
    let called = false;
    scope.callback = str => called = true;
    element.find('button').triggerHandler('click');
    expect(called).toBe(false);
    enterKeydown();
    expect(called).toBe(false);
  });

  it('invokes `on-criteria-change` callback when the model IS NOT VALID', () => {
    compile('<form><gov-search name="criteria" ng-minlength="3" ng-model="model" on-criteria-change="callback($criteria, $valid)"></gov-search></form>');
    let isValid = undefined, criteria = undefined;

    scope.callback = (_criteria, _isValid) => {
        isValid = _isValid;
        criteria = _criteria;
    };
    mockFormController({
        $viewValue: 'fa',
        $valid: false
    });

    element.find('button').triggerHandler('click');

    expect(isValid).toBe(false);
    expect(criteria).toBe('fa');
  });

  it('invokes `on-criteria-change` callback when the model IS VALID', () => {
    compile('<form><gov-search name="criteria" ng-model="model" on-criteria-change="callback($criteria, $valid)"></gov-search></form>');
    let isValid = undefined, criteria = undefined;

    scope.callback = (_criteria, _isValid) => {
      isValid = _isValid;
      criteria = _criteria;
    };
    mockFormController({
      $viewValue: 'foo',
      $valid: true
    });

    element.find('button').triggerHandler('click');

    expect(isValid).toBe(true);
    expect(criteria).toBe('foo');
  });

  it('calls revalidate on the lazy validation controller on submit attempt', () => {
    compile('<form><gov-search ng-model="model"></gov-search></form>');
    let lazyValidationCtrl = { revalidate: sinon.spy() };
    controller.lazyValidationController = lazyValidationCtrl;
    element.find('button').triggerHandler('click');
    expect(lazyValidationCtrl.revalidate).toHaveBeenCalled();
  });

  it('applies the outer `name`, `placeholder` and `autocomplete` attributes to the inner input', () => {
    compile(`<form><gov-search name="foo" placeholder="Search" autocomplete="on" ng-model="model"></gov-search></form>`);
    expect(element.find('input').attr('name')).toEqual('foo');
    expect(element.find('input').attr('placeholder')).toEqual('Search');
    expect(element.find('input').attr('autocomplete')).toEqual('on');
  });

  it('applies the outer `input-id` and `aria-describedby` attributes to the inner input', () => {
    compile(`<form><gov-search input-id="inputid" aria-describedby="someid" ng-model="model"></gov-search></form>`);
    expect(element.find('input').attr('id')).toEqual('inputid');
    expect(element.find('input').attr('aria-describedby')).toEqual('someid');
  });

  it('applies the outer `ng-minlength` attribute to the inner input', () => {
    compile(`<form><gov-search ng-minlength="3" ng-model="model"></gov-search></form>`);
    expect(element.find('input').attr('ng-minlength')).toEqual('3');
  });

  it('applies the gov-search-inline class when inline attribute is set', () => {
    compile(`<form><gov-search inline="true" ng-model="model"></gov-search></form>`);
    expect(element.find('.gov-search-input').hasClass('gov-search-inline')).toBe(true);
  });

  it(`doesn't apply the gov-search-inline class when inline attribute is not set`, () => {
    compile(`<form><gov-search inline="false" ng-model="model"></gov-search></form>`);
    expect(element.find('.gov-search-input').hasClass('gov-search-inline')).toBe(false);
  });

  it(`applies ng-required attribute to the inner input when the required attribute is set`, () => {
    compile(`<form><gov-search required="true" ng-model="model"></gov-search></form>`);
    expect(element.find('input').attr('ng-required')).toEqual('true');
  });

  it(`does not apply required attribute to the inner input when the required attribute is not set`, () => {
    compile(`<form><gov-search ng-model="model"></gov-search></form>`);
    expect(element.find('input').attr('ng-required')).toEqual('');
  });
});
