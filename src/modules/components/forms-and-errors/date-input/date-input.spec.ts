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
    const tpl = `<gov-date-input ng-focus="onFocus()" ng-model="model"></gov-date-input>`;
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
    compile(`<gov-date-input ng-focus="onFocus()" ng-model="model"></gov-date-input>`);
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
    compile(`<gov-date-input ng-blur="onBlur()" ng-model="model"></gov-date-input>`);
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
        <gov-date-input name="pdkDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    expect(ngModelCtrl.$touched).toEqual(false);
    dayInput.focus();
    dayInput.blur();
    $timeout.flush();
    expect(ngModelCtrl.$touched).toEqual(true);
  });

  it('sets the ng-model model value as a date', () => {
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    setDateValues({day: 10, month: 10, year: 2016});
    expect(scope.model instanceof Date).toBe(true);
    expect(scope.model.getDate()).toEqual(10);
    expect(scope.model.getMonth()).toEqual(9);
    expect(scope.model.getFullYear()).toEqual(2016);
  });

  it('passes the `required` validation when at least one input field is populated', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" ng-model="model" required></gov-date-input>
      </form>
    `);
    expect(scope.testForm.pdkDate.$error.required).toBe(true);
    setDateValues({day: '1'});
    expect(scope.testForm.pdkDate.$error.required).toBeUndefined();
  });

  it('runs the ng-model `dateFormat` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    expect(ngModelCtrl.$error.dateFormat).toBeUndefined();
    setDateValues({day: 31, month: 4, year: 2});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 31, month: 4, year: 20});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 31, month: 4, year: 201});
    expect(ngModelCtrl.$error.dateFormat).toBeDefined();
    setDateValues({day: 31, month: 4, year: 2016});
    expect(ngModelCtrl.$error.dateFormat).toBeUndefined();
  });

  it('runs the ng-model `dateExists` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    expect(ngModelCtrl.$error.dateExists).toBeUndefined();
    setDateValues({day: 29, month: 2, year: 2017});
    expect(ngModelCtrl.$error.dateExists).toBeDefined();
    setDateValues({day: 31, month: 4, year: 2016});
    expect(ngModelCtrl.$error.dateExists).toBeDefined();
    setDateValues({day: 29, month: 2, year: 2016});
    expect(ngModelCtrl.$error.dateExists).toBeUndefined();
  });

  it('runs the ng-model `dateMin` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" date-input-min="val" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    // no error when no date / min value entered
    expect(ngModelCtrl.$error.dateMin).toBeUndefined();
    scope.val = new Date(2015, 9, 15);
    scope.$digest();
    setDateValues({day: 14, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMin).toBeDefined();
    setDateValues({day: 15, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMin).toBeUndefined();

    scope.val = '2015-10-15';
    scope.$digest();
    setDateValues({day: 14, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMin).toBeDefined();
    setDateValues({day: 15, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMin).toBeUndefined();

    // assert bound property changing updates $error
    scope.val = '2015-10-16';
    scope.$digest();
    expect(ngModelCtrl.$error.dateMin).toBeDefined();
  });

  it('runs the ng-model `dateFuture` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" date-input-future="true" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    // no error when no date / max value entered
    expect(ngModelCtrl.$error.dateFuture).toBeUndefined();
    const clock = sinon.useFakeTimers(1451606400000); // 01/01/2016
    setDateValues({day: 1, month: 1, year: 2016});
    expect(ngModelCtrl.$error.dateFuture).toBeDefined();
    setDateValues({day: 2, month: 1, year: 2016});
    expect(ngModelCtrl.$error.dateFuture).toBeUndefined();
    clock.restore();
  });

  it('runs the ng-model `datePast` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" date-input-past="true" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    // no error when no date / max value entered
    expect(ngModelCtrl.$error.dateFuture).toBeUndefined();
    const clock = sinon.useFakeTimers(1451606400000); // 01/01/2016
    setDateValues({day: 2, month: 1, year: 2016});
    expect(ngModelCtrl.$error.datePast).toBeDefined();
    setDateValues({day: 1, month: 1, year: 2016});
    expect(ngModelCtrl.$error.datePast).toBeUndefined();
    clock.restore();
  });

  it('runs the ng-model `dateMax` validator when a date is set', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" date-input-max="val" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    // no error when no date / max value entered
    expect(ngModelCtrl.$error.dateMax).toBeUndefined();
    scope.val = new Date('2015-10-15');
    scope.$digest();
    setDateValues({day: 16, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMax).toBeDefined();
    setDateValues({day: 15, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMax).toBeUndefined();

    scope.val = '2015-10-15';
    scope.$digest();
    setDateValues({day: 16, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMax).toBeDefined();
    setDateValues({day: 15, month: 10, year: 2015});
    expect(ngModelCtrl.$error.dateMax).toBeUndefined();

    // assert bound property changing updates $error
    scope.val = '2015-10-14';
    scope.$digest();
    expect(ngModelCtrl.$error.dateMax).toBeDefined();
  });

  it('does not apply internal date validators when the date is empty', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" ng-model="model"></gov-date-input>
      </form>
    `);
    const ngModelCtrl = scope.testForm.pdkDate;
    expect(ngModelCtrl.$error.dateExists).toBeUndefined();
    expect(ngModelCtrl.$error.dateFormat).toBeUndefined();
  });

  it('updates the input fields in the view when the model is changed directly', () => {
    scope.model = null;
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    expect(dayInput.val()).toEqual('');
    expect(monthInput.val()).toEqual('');
    expect(yearInput.val()).toEqual('');
    scope.model = undefined;
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    expect(dayInput.val()).toEqual('');
    expect(monthInput.val()).toEqual('');
    expect(yearInput.val()).toEqual('');
    scope.model = 0;
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    expect(dayInput.val()).toEqual('1');
    expect(monthInput.val()).toEqual('1');
    expect(yearInput.val()).toEqual('1970');
    scope.model = '2016-08-03';
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    expect(dayInput.val()).toEqual('3');
    expect(monthInput.val()).toEqual('8');
    expect(yearInput.val()).toEqual('2016');
    scope.model = new Date(2016, 7, 3);
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    expect(dayInput.val()).toEqual('3');
    expect(monthInput.val()).toEqual('8');
    expect(yearInput.val()).toEqual('2016');
  });

  it('removes the internal input fields from consideration by an outer form', () => {
    compile(`
      <form name="testForm">
        <gov-date-input name="pdkDate" ng-model="model"></gov-date-input>
      </form>
    `);
    expect(scope.testForm.dateDay).toBeUndefined();
    expect(scope.testForm.dateMonth).toBeUndefined();
    expect(scope.testForm.dateYear).toBeUndefined();
  });

  it('formats the model value via the date-input-format property', () => {
    compile(`<gov-date-input data-date-input-format="yyyy-MM-dd" ng-model="model"></gov-date-input>`);
    scope.$digest();
    setDateValues({day: 15, month: 7, year: 2016});
    expect(scope.model).toEqual('2016-07-15');
  });

  it('unsets the ng-model value for an incomplete date', () => {
    compile(`<gov-date-input ng-model="model"></gov-date-input>`);
    setDateValues({day: 15, month: 7});
    expect(scope.model).toBeUndefined();
  });
});