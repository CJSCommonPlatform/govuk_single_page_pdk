import formsErrors from '../forms-errors';

describe('components/forms-and-errors/time-input', () => {

  let $compile: ng.ICompileService;
  let $timeout: ng.ITimeoutService;
  let $document: any;
  let scope: any;
  let element: any;
  let hourInput: any;
  let minuteInput: any;

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
    hourInput = element.find('[name=timeHour]');
    minuteInput = element.find('[name=timeMinute]');
  }

  function setTimeValues(hour: string, minute?: string) {
    hourInput.val(hour);
    hourInput.triggerHandler('input');
    minuteInput.val(minute);
    minuteInput.triggerHandler('input');
  }

  it('triggers a focus event when any input field receives focus', () => {
    let focused = false;
    scope.onFocus = () => focused = true;
    const tpl = `<pdk-time-input ng-focus="onFocus()" ng-model="model"></pdk-time-input>`;
    compile(tpl);
    hourInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    compile(tpl);
    minuteInput.focus();
    expect(focused).toEqual(true);
  });

  it('does not propagate successive focus events without an intervening blur', () => {
    let focused = false;
    scope.onFocus = () => focused = true;
    compile(`<pdk-time-input ng-focus="onFocus()" ng-model="model"></pdk-time-input>`);
    hourInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    minuteInput.focus();
    expect(focused).toEqual(false);
    minuteInput.blur();
    $timeout.flush();
    hourInput.focus();
    expect(focused).toEqual(true);
  });

  it('triggers a blur event when all input fields lose focus', () => {
    let blurred = false;
    scope.onBlur = () => blurred = true;
    compile(`<pdk-time-input ng-blur="onBlur()" ng-model="model"></pdk-time-input>`);
    hourInput.focus();
    hourInput.blur();
    minuteInput.focus();
    $timeout.flush();
    expect(blurred).toBe(false);
    hourInput.focus();
    hourInput.blur();
    $timeout.flush();
    expect(blurred).toBe(true);
  });

  it('sets the ng-model as touched when any input field is touched', () => {
    compile(`
      <form name="testForm">
        <pdk-time-input name="pdkTime" ng-model="model"></pdk-time-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkTime;
    expect(ngModelCtrl.$touched).toEqual(false);
    hourInput.focus();
    hourInput.blur();
    $timeout.flush();
    expect(ngModelCtrl.$touched).toEqual(true);
  });

  it('sets the ng-model model value as mm:ss timestamp', () => {
    compile(`<pdk-time-input ng-model="model"></pdk-time-input>`);
    setTimeValues('23', '59');
    expect(scope.model).toEqual('23:59');
  });

  it('passes the `required` validation when at least one input field is populated', () => {
    compile(`
      <form name="testForm">
        <pdk-time-input name="pdkTime" ng-model="model" required></pdk-time-input>
      </form>
    `);
    expect(scope.testForm.pdkTime.$error.required).toBe(true);
    setTimeValues('1');
    expect(scope.testForm.pdkTime.$error.required).toBeUndefined();
  });

  it('runs the ng-model `timeFormat` validator when a time is set', () => {
    compile(`
      <form name="testForm">
        <pdk-time-input name="pdkTime" ng-model="model"></pdk-time-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkTime;
    expect(ngModelCtrl.$error.timeFormat).toBeUndefined();
    setTimeValues('00', '0');
    expect(ngModelCtrl.$error.timeFormat).toBeDefined();
    setTimeValues('0', '00');
    expect(ngModelCtrl.$error.timeFormat).toBeDefined();
    setTimeValues('99', '99');
    expect(ngModelCtrl.$error.timeFormat).toBeUndefined();
  });

  it('runs the ng-model `timeExists` validator when a time is set', () => {
    compile(`
      <form name="testForm">
        <pdk-time-input name="pdkTime" ng-model="model"></pdk-time-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkTime;
    expect(ngModelCtrl.$error.timeExists).toBeUndefined();
    setTimeValues('24', '59');
    expect(ngModelCtrl.$error.timeExists).toBeDefined();
    setTimeValues('00', '60');
    expect(ngModelCtrl.$error.timeExists).toBeDefined();
    setTimeValues('23', '59');
    expect(ngModelCtrl.$error.timeExists).toBeUndefined();
    setTimeValues('00', '00');
    expect(ngModelCtrl.$error.timeExists).toBeUndefined();
  });

  it('does not apply internal time validators when the time is empty', () => {
    compile(`
      <form name="testForm">
        <pdk-time-input name="pdkTime" ng-model="model"></pdk-time-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkTime;
    expect(ngModelCtrl.$error.timeExists).toBeUndefined();
    expect(ngModelCtrl.$error.timeFormat).toBeUndefined();
  });

  it('updates the input fields in the view when the model is changed directly', () => {
    compile(`<pdk-time-input ng-model="model"></pdk-time-input>`);
    scope.model = '23:59';
    scope.$digest();
    expect(hourInput.val()).toEqual('23');
    expect(minuteInput.val()).toEqual('59');
    scope.model = '';
    scope.$digest();
    expect(hourInput.val()).toEqual('');
    expect(minuteInput.val()).toEqual('');
  });

  it('removes the internal input fields from consideration by an outer form', () => {
    compile(`
      <form name="testForm">
        <pdk-time-input name="pdkTime" ng-model="model"></pdk-time-input>
      </form>
    `);
    expect(scope.testForm.timeHour).toBeUndefined();
    expect(scope.testForm.timeMinute).toBeUndefined();
  });

  it('unsets the ng-model value for an incomplete time', () => {
    compile(`<pdk-time-input ng-model="model"></pdk-time-input>`);
    setTimeValues('23');
    expect(scope.model).toBeUndefined();
  });
});