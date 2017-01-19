/* tslint:disable:max-line-length */
import formsErrors from '../forms-errors';

describe('components/forms-and-errors/search', () => {

  let scope: any;
  let element: any;
  let input: any;
  let $timeout: ng.ITimeoutService;

  beforeEach(angular.mock.module(formsErrors));

  beforeEach(inject((_$timeout_: ng.ITimeoutService, $rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
    $timeout = _$timeout_;
  }));

  function compile(html: string) {
    inject(($compile: ng.ICompileService) => {
      element = $compile(html)(scope);
      scope.$digest();
      $timeout.flush();
      input = element.find('input');
    });
  }

  function setInput(val: string) {
    input.val(val);
    input.triggerHandler('input');
  }

  function enterKeydown() {
    const event = jQuery.Event('keydown', {keyCode: 13});
    sinon.stub(event, 'preventDefault');
    input.triggerHandler(event);
    return <any> event;
  }

  it('synchronises the inner input with the outer model', () => {
    compile('<pdk-search ng-change="text = model" ng-model="model"></pdk-search>');
    setInput('foo');
    expect(scope.text).toEqual('foo');
  });

  it('updates the inner input when the model value is set directly', () => {
    compile('<pdk-search ng-change="text = model" ng-model="model"></pdk-search>');
    scope.model = 'foo';
    scope.$digest();
    expect(input.val()).toEqual('foo');
  });

  it('invokes the `on-search` callback when the search button is clicked', () => {
    compile('<pdk-search ng-model="model" on-search="callback($event)"></pdk-search>');
    let text = null;
    scope.callback = str => text = str;
    scope.$digest();
    setInput('foo');
    element.find('button').click();
    expect(text).toEqual('foo');
  });

  it('invokes the `on-search` callback when the enter key is pressed', () => {
    compile('<pdk-search ng-model="model" on-search="callback($event)"></pdk-search>');
    let text = null;
    scope.callback = str => text = str;
    scope.$digest();
    setInput('foo');
    const event = enterKeydown();
    expect(event.preventDefault.callCount).toEqual(1);
    expect(text).toEqual('foo');
  });

  it('disables the `on-search` callback when the model is invalid', () => {
    compile('<pdk-search required ng-model="model" on-search="callback($event)"></pdk-search>');
    let called = false;
    scope.callback = str => called = true;
    element.find('button').triggerHandler('click');
    expect(called).toBe(false);
    enterKeydown();
    expect(called).toBe(false);
  });

  it('moves the outer `id` property to the inner input', () => {
    scope.id = 'foo';
    compile('<pdk-search id="{{id}}" ng-model="model"></pdk-search>');
    expect(element.attr('id')).toBeUndefined();
    expect(input.attr('id')).toEqual('foo');
    scope.id = 'bar';
    scope.$digest();
    $timeout.flush();
    expect(element.attr('id')).toBeUndefined();
    expect(input.attr('id')).toEqual('bar');
  });
});
