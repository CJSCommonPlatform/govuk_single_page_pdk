import formsErrors from '../forms-errors';

xdescribe('components/forms-and-errors/duration-input', () => {

  let $compile: ng.ICompileService;
  let $timeout: ng.ITimeoutService;
  let $document: any;
  let scope: any;
  let element: any;
  let amountInput: any;
  let unitInput: any;

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
    amountInput = element.find('[name=durationAmount]');
    unitInput = element.find('[name=durationUnit]');
  }

  function setInput(amount: string, unit?: string) {
    amountInput.val(amount);
    amountInput.triggerHandler('input');
    if (unit) {
      unitInput.find(`option:contains("${unit}")`);
      unitInput.triggerHandler('input');
    }
  }

  it('triggers a focus event when any input field receives focus', () => {
    let focused = false;
    scope.onFocus = () => focused = true;
    const tpl = `<pdk-duration-input ng-focus="onFocus()" ng-model="model"></pdk-duration-input>`;
    compile(tpl);
    amountInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    compile(tpl);
    unitInput.focus();
    expect(focused).toEqual(true);
  });

  it('does not propagate successive focus events without an intervening blur', () => {
    let focused = false;
    scope.onFocus = () => focused = true;
    compile(`<pdk-duration-input ng-focus="onFocus()" ng-model="model"></pdk-duration-input>`);
    amountInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    unitInput.focus();
    expect(focused).toEqual(false);
    unitInput.blur();
    $timeout.flush();
    amountInput.focus();
    expect(focused).toEqual(true);
  });

  it('triggers a blur event when all input fields lose focus', () => {
    let blurred = false;
    scope.onBlur = () => blurred = true;
    compile(`<pdk-duration-input ng-blur="onBlur()" ng-model="model"></pdk-duration-input>`);
    amountInput.focus();
    amountInput.blur();
    unitInput.focus();
    $timeout.flush();
    expect(blurred).toBe(false);
    unitInput.blur();
    $timeout.flush();
    expect(blurred).toBe(true);
  });

  it('sets the ng-model as touched when any input field is touched', () => {
    compile(`
      <form name="testForm">
        <pdk-duration-input name="pdkDuration" ng-model="model"></pdk-duration-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDuration;
    expect(ngModelCtrl.$touched).toEqual(false);
    amountInput.focus();
    amountInput.blur();
    $timeout.flush();
    expect(ngModelCtrl.$touched).toEqual(true);
  });

  it('sets the ng-model model value as mm:ss timestamp', () => {
    compile(`<pdk-duration-input ng-model="model"></pdk-duration-input>`);
    setInput('23', '59');
    expect(scope.model).toEqual('23:59');
  });

  it('passes the `required` validation when at least one input field is populated', () => {
    compile(`
      <form name="testForm">
        <pdk-duration-input name="pdkDuration" ng-model="model" required></pdk-duration-input>
      </form>
    `);
    expect(scope.testForm.pdkDuration.$error.required).toBe(true);
    setInput('1');
    expect(scope.testForm.pdkDuration.$error.required).toBeUndefined();
  });

  it('runs the ng-model `durationFormat` validator when a time is set', () => {
    compile(`
      <form name="testForm">
        <pdk-duration-input name="pdkDuration" ng-model="model"></pdk-duration-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDuration;
    expect(ngModelCtrl.$error.durationFormat).toBeUndefined();
    setInput('00', '0');
    expect(ngModelCtrl.$error.durationFormat).toBeDefined();
    setInput('0', '00');
    expect(ngModelCtrl.$error.durationFormat).toBeDefined();
    setInput('99', '99');
    expect(ngModelCtrl.$error.durationFormat).toBeUndefined();
  });

  it('does not apply internal validators when the duration is empty', () => {
    compile(`
      <form name="testForm">
        <pdk-duration-input name="pdkDuration" ng-model="model"></pdk-duration-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDuration;
    expect(ngModelCtrl.$error.durationFormat).toBeUndefined();
  });

  it('updates the input fields in the view when the model is changed directly', () => {
    compile(`<pdk-duration-input ng-model="model"></pdk-duration-input>`);
    scope.model = '23:59';
    scope.$digest();
    expect(amountInput.val()).toEqual('23');
    expect(unitInput.val()).toEqual('59');
    scope.model = '';
    scope.$digest();
    expect(amountInput.val()).toEqual('');
    expect(unitInput.val()).toEqual('');
  });

  it('removes the internal input fields from consideration by an outer form', () => {
    compile(`
      <form name="testForm">
        <pdk-duration-input name="pdkDuration" ng-model="model"></pdk-duration-input>
      </form>
    `);
    expect(scope.testForm.durationAmount).toBeUndefined();
    expect(scope.testForm.durationUnit).toBeUndefined();
  });

  it('unsets the ng-model value for an incomplete duration', () => {
    compile(`<pdk-duration-input ng-model="model"></pdk-duration-input>`);
    setInput('23');
    expect(scope.model).toBeUndefined();
  });
});