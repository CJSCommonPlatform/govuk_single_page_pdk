import {domainTwo} from '../../index';

describe('component 2.1', () => {

  let $scope: any;
  let element: JQuery;
  let callbackValue: any;

  beforeEach(angular.mock.module(domainTwo));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    $scope = $rootScope.$new();
    $scope.items = ['one', 'two', 'three'];
    $scope.callback = val => callbackValue = val;
    element = $compile(`<component-two-one items="items" on-select="callback($event)">
                        </component-two-one>`)($scope);
    $scope.$digest();
    callbackValue = null;
  }));

  it('displays a list of the passed items', () => {
    expect(element.find('.list-item').length).toEqual(3);
  });

  it('invokes an `onSelect` callback when an item is clicked', () => {
    element.find('*:contains("one")').click();
    expect(callbackValue).toEqual('one');
  });
});