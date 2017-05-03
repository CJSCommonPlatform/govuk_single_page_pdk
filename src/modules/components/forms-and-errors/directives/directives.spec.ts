import formsErrors from '../forms-errors';

describe('components/forms-and-errors/directives', () => {

  let scope: any;
  let element: any;

  beforeEach(angular.mock.module(formsErrors));

  function compile(html: string) {
    inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
      scope = $rootScope.$new();
      element = $compile(html)(scope);
      scope.$digest();
    });
  }

  describe('input-number', () => {

    let input: any;

    function setValue(val: any) {
      element.val(val);
      element.triggerHandler('input');
      scope.$digest();
    }

    it('prevents non-numeric characters from being entered', () => {
      compile('<input type="text" ng-model="model" input-number>');
      setValue('1');
      expect(element.val()).toEqual('1');
      setValue('2a');
      expect(element.val()).toEqual('2');
      setValue('3!');
      expect(element.val()).toEqual('3');
    });

    it('parses string inputs to type number', () => {
      compile('<input type="text" ng-model="model" input-number>');
      setValue('1');
      expect(scope.model).toEqual('1');
    });

    it('returns a null value when an empty string is parsed', () => {
      compile('<input type="text" ng-model="model" input-number>');
      setValue('');
      expect(scope.model).toEqual(null);
    });

    it('prevents numbers greater than a nominated max being entered', () => {
      compile('<input type="text" ng-model="model" input-number input-number-max="12">');
      setValue(12);
      expect(scope.model).toEqual('12');
      expect(element.val()).toEqual('12');
      setValue(13);
      expect(scope.model).toEqual('12');
      expect(element.val()).toEqual('12');
    });

    it('pads the view value of a number with leading zeros', () => {
      compile('<input type="text" ng-model="model" input-number input-number-pad="3">');
      scope.model = 1;
      scope.$digest();
      expect(element.val()).toEqual('001');
      scope.model = 100;
      scope.$digest();
      expect(element.val()).toEqual('100');
    });

    it('applies padding to the view value on blur', () => {
      compile('<input type="text" ng-model="model" input-number input-number-pad="2">');
      setValue('1');
      expect(element.val()).toEqual('1');
      element.blur();
      expect(element.val()).toEqual('01');
    });

    it('accepts a `leading-zeros-enabled` flag to preserve leading zeros', () => {
      compile('<input type="text" ng-model="model" input-number>');
      setValue('01');
      expect(element.val()).toEqual('1');
    });
  });

  describe('block-label', () => {

    it(`toggles the 'focused' class dependent on the element's focus`, () => {
      compile(`<div class="block-label"><input type="radio"></div>`);
      expect(element.hasClass('focused')).toBe(false);
      element.find('input').triggerHandler('focus');
      expect(element.hasClass('focused')).toBe(true);
      element.find('input').triggerHandler('blur');
      expect(element.hasClass('focused')).toBe(false);

      element.find('input').triggerHandler('focusin');
      expect(element.hasClass('focused')).toBe(true);
      element.find('input').triggerHandler('focusout');
      expect(element.hasClass('focused')).toBe(false);
    });
  });
});
