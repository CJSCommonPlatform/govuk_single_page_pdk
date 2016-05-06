import {common} from '../../index';

describe('component-a', () => {

  let $scope: any;
  let element: JQuery;

  beforeEach(angular.mock.module(common));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    $scope = $rootScope.$new();
    $scope.model = {propOne: 'foo'};
    element = $compile('<component-a model="model"></component-a>')($scope);
    $scope.$digest();
  }));

  it('includes a filtered model', () => {
    expect(element.find('p')).toContainText('foo (filtered by filter-a)');
  });
});