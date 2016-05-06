import {domainThree} from '../index';
import {ServiceThreeOne} from '../services/service-3.1';

describe('page component 3.1', () => {

  let scope: any;
  let service: ServiceThreeOne;
  let element: JQuery;
  let $doSomething: ng.IDeferred<string[]>;

  beforeEach(angular.mock.module(domainThree));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService,
                     ServiceThreeOne: ServiceThreeOne, $q: ng.IQService) => {
    scope   = $rootScope.$new();
    service = ServiceThreeOne;
    // stub initialization promise prior to compiling
    $doSomething = $q.defer();
    sinon.stub(service, 'doSomething').returns($doSomething.promise);
    // compile
    element = $compile('<page-component-three-one></page-component-three-one>')(scope);
    scope.$digest();
  }));

  it('sets a loading state while initializing', () => {
    expect(element.find('.loading').length).toEqual(1);
    $doSomething.resolve([]);
    scope.$digest();
    expect(element.find('.loading').length).toEqual(0);
  });

  it('displays the results of the service call in the view', () => {
    $doSomething.resolve(['one', 'two']);
    scope.$digest();
    expect(element.find('.item').eq(0)).toContainText('one');
    expect(element.find('.item').eq(1)).toContainText('two');
  });
});