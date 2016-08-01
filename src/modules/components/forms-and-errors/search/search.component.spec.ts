import formsErrors from '../forms-errors';

describe('components/forms-and-errors/search', () => {

  let scope: any;
  let element: any;
  let input: any;

  beforeEach(angular.mock.module(formsErrors));

  function compile(html: string) {
    inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
      scope = $rootScope.$new();
      element = $compile(html)(scope);
      input = element.find('input');
      scope.$digest();
    });
  }

  function enterKeydown() {
    const event = jQuery.Event('keydown', {keyCode: 13});
    sinon.stub(event, 'preventDefault');
    input.triggerHandler(event);
    return <any> event;
  }

  it('there is a two-way binding between the outer and inner ng-model', () => {
    compile('<gov-search ng-model="model"></gov-search>');
    // outer -> inner
    scope.model = 'foo';
    scope.$digest();
    expect(input.val()).toEqual('foo');
    // inner -> outer
    input.val('bar').triggerHandler('change');
    expect(scope.model).toEqual('bar');
  });

  it('invokes the `on-search` callback when the search button is clicked', () => {
    compile('<gov-search ng-model="model" on-search="callback($event)"></gov-search>');
    let text = null;
    scope.model = 'foo';
    scope.callback = str => text = str;
    scope.$digest();
    element.find('button').click();
    expect(text).toEqual('foo');
  });

  it('invokes the `on-search` callback when the enter key is pressed', () => {
    compile('<gov-search ng-model="model" on-search="callback($event)"></gov-search>');
    let text = null;
    scope.model = 'foo';
    scope.callback = str => text = str;
    scope.$digest();
    const event = enterKeydown();
    expect(event.preventDefault.callCount).toEqual(1);
    expect(text).toEqual('foo');
  });

  it('disables the `on-search` callback when the model is invalid', () => {
    compile('<gov-search required ng-model="model" on-search="callback($event)"></gov-search>');
    let called = false;
    scope.callback = str => called = true;
    element.find('button').triggerHandler('click');
    expect(called).toBe(false);
    enterKeydown();
    expect(called).toBe(false);
  });

  it('applies the outer `name`, `placeholder` and `autocomplete` attributes to the inner input', () => {
    compile(`<gov-search name="foo" placeholder="Search" autocomplete="on" ng-model="model"></gov-search>`);
    expect(element.find('input').attr('name')).toEqual('foo');
    expect(element.find('input').attr('placeholder')).toEqual('Search');
    expect(element.find('input').attr('autocomplete')).toEqual('on');
  });

  it('applies the outer `id` and `ariaDescribedby` attributes to the inner input', () => {
      compile(`<gov-search id="inputid" aria-describedby="someid" ng-model="model"></gov-search>`);
      expect(element.find('input').attr('id')).toEqual('inputid');
      expect(element.find('input').attr('aria-describedby')).toEqual('someid');
  });
});
