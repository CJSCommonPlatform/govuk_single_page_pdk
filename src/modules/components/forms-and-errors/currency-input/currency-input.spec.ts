import formsErrors from '../forms-errors';

describe('components/forms-and-errors/currency-input', () => {

  let $compile: ng.ICompileService;
  let $timeout: ng.ITimeoutService;
  let $document: any;
  let scope: any;
  let element: any;
  let currencyInput: any;

  beforeEach(angular.mock.module(formsErrors));

  beforeEach(inject((
    _$compile_:  ng.ICompileService,
    _$document_: ng.IDocumentService,
    _$timeout_:  ng.ITimeoutService,
    $rootScope:  ng.IRootScopeService
  ) => {
    $compile  = _$compile_;
    $timeout  = _$timeout_;
    $document = _$document_;
    scope     = $rootScope.$new();
  }));

  function compile(html: string) {
    element = $compile(html)(scope);
    $document.find('body').append(element);
    scope.$digest();
    $timeout.flush();
    currencyInput = element.find('input');
  }

  function setInput(val: string) {
    currencyInput.val(val);
    currencyInput.triggerHandler('input');
  }

  it('moves the outer `id` property to the inner input', () => {
    scope.id = 'foo';
    compile('<pdk-currency-input id="{{id}}" ng-model="currency"></pdk-currency-input>');
    expect(element.attr('id')).toBeUndefined();
    expect(currencyInput.attr('id')).toEqual('foo');
    scope.id = 'bar';
    scope.$digest();
    $timeout.flush();
    expect(element.attr('id')).toBeUndefined();
    expect(currencyInput.attr('id')).toEqual('bar');
  });

  it('runs the ng-model `currencyFormat` validator when a currency is set', () => {
    compile(`
      <form name="testForm">
        <pdk-currency-input name="pdkCurrency" ng-model="model"></pdk-currency-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkCurrency;
    expect(ngModelCtrl.$error.currencyFormat).toBeUndefined();
    setInput('1.0');
    expect(ngModelCtrl.$error.currencyFormat).toBeDefined();
    setInput('.50');
    expect(ngModelCtrl.$error.currencyFormat).toBeDefined();
    setInput('50');
    expect(ngModelCtrl.$error.currencyFormat).toBeUndefined();
  });
});