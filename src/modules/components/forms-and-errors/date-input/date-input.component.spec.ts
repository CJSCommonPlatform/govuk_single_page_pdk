import formsErrors from '../forms-errors';

describe('components/forms-and-errors/date-input', () => {

  let $compile: ng.ICompileService;
  let $timeout: ng.ITimeoutService;
  let $document: any;
  let scope: any;
  let element: any;
  let dayInput: any;
  let monthInput: any;
  let yearInput: any;

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
    dayInput   = element.find('[name=dateDay]');
    monthInput = element.find('[name=dateMonth]');
    yearInput  = element.find('[name=dateYear]');
  }

  function setDateValues(vals: {day?: any, month?: any, year?: any}) {
    dayInput.val(vals.day);
    dayInput.triggerHandler('input');
    monthInput.val(vals.month);
    monthInput.triggerHandler('input');
    yearInput.val(vals.year);
    yearInput.triggerHandler('input');
  }

  it('triggers a focus event when any input field receives focus', () => {
    let focused = false;
    scope.onFocus = () => focused = true;
    const tpl = `<gov-date-input name="govDate" ng-focus="onFocus()" ng-model="model"></gov-date-input>`;
    compile(tpl);
    dayInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    compile(tpl);
    monthInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    compile(tpl);
    yearInput.focus();
    expect(focused).toEqual(true);
  });

  it('does not propagate successive focus events without an intervening blur', () => {
    let focused = false;
    scope.onFocus = () => focused = true;
    compile(`<gov-date-input name="govDate" ng-focus="onFocus()" ng-model="model"></gov-date-input>`);
    dayInput.focus();
    expect(focused).toEqual(true);
    focused = false;
    dayInput.focus();
    expect(focused).toEqual(false);
    dayInput.blur();
    $timeout.flush();
    dayInput.focus();
    expect(focused).toEqual(true);
  });

  it('triggers a blur event when all input fields lose focus', () => {
    let blurred = false;
    scope.onBlur = () => blurred = true;
    compile(`<gov-date-input name="govDate" ng-blur="onBlur()" ng-model="model"></gov-date-input>`);
    dayInput.focus();
    dayInput.blur();
    monthInput.focus();
    $timeout.flush();
    expect(blurred).toBe(false);
    dayInput.focus();
    dayInput.blur();
    $timeout.flush();
    expect(blurred).toBe(true);
  });

  it('sets the ng-model as touched when any input field is touched', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="govDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.govDate;
    expect(ngModelCtrl.$touched).toEqual(false);
    dayInput.focus();
    dayInput.blur();
    $timeout.flush();
    expect(ngModelCtrl.$touched).toEqual(true);
  });

  it('sets the ng-model model value as a date', () => {
    compile(`<gov-date-input name="govDate" ng-model="model"></gov-date-input>`);
    setDateValues({day: 10, month: 10, year: 2016});
    expect(scope.model instanceof Date).toBe(true);
    expect(scope.model.getDate()).toEqual(10);
    expect(scope.model.getMonth()).toEqual(9);
    expect(scope.model.getFullYear()).toEqual(2016);
  });

  it('passes the `required` validation when all three input fields are populated', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="govDate" ng-model="model" required></gov-date-input>
      </form>
    `);
    setDateValues({day: 'X', month: 'Y'});
    expect(scope.testForm.govDate.$error.required).toBe(true);
    setDateValues({day: 'X', month: 'Y', year: 'Z'});
    expect(scope.testForm.govDate.$error.required).toBeUndefined();
  });

  it('runs the ng-model `dateFormat` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="govDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.govDate;
    setDateValues({day: 'A', month: 'X', year: 'Y'});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 290, month: 2, year: 2017});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 3, month: 100, year: 201});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 31, month: 4, year: 201});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 31, month: 4, year: 2016});
    expect(ngModelCtrl.$error.dateFormat).toBeUndefined();
  });

  it('runs the ng-model `dateExists` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="govDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.govDate;
    setDateValues({day: 29, month: 2, year: 2017});
    expect(ngModelCtrl.$error.dateExists).toBeDefined();
    setDateValues({day: 31, month: 4, year: 2016});
    expect(ngModelCtrl.$error.dateExists).toBeDefined();
    setDateValues({day: 29, month: 2, year: 2016});
    expect(ngModelCtrl.$error.dateExists).toBeUndefined();
  });

  it('does not apply internal date validators when the date is empty', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="govDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.govDate;
    expect(ngModelCtrl.$error.dateExists).toBeUndefined();
    expect(ngModelCtrl.$error.dateFormat).toBeUndefined();
  });

  it('updates the input fields in the view when the model is changed directly', () => {
    compile(`<gov-date-input name="govDate" ng-model="model"></gov-date-input>`);
    scope.model = new Date(2016, 0, 5);
    scope.$digest();
    expect(dayInput.val()).toEqual('5');
    expect(monthInput.val()).toEqual('1');
    expect(yearInput.val()).toEqual('2016');
  });

  it('removes the internal input fields from consideration by an outer form', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="govDate" ng-model="model"></gov-date-input>
      </form>
    `);
    expect(scope.testForm.dateDay).toBeUndefined();
    expect(scope.testForm.dateMonth).toBeUndefined();
    expect(scope.testForm.dateYear).toBeUndefined();
  });
});