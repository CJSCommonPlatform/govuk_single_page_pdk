import {common} from '../index';

describe('directive A', () => {

  let scope: any;
  let element: any;

  beforeEach(angular.mock.module(common));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
    scope.model = 1;
    element = $compile('<input type="text" ng-model="model" directive-a>')(scope);
    scope.$digest();
  }));

  it('marks a model valid when the model value is an odd number', () => {
    const ngModel = element.controller('ngModel');
    scope.model = 1;
    scope.$digest();
    expect(ngModel.$valid).toBe(false);
    scope.model = 2;
    scope.$digest();
    expect(ngModel.$valid).toBe(true);
  });
});