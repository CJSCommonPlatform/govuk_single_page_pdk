import {domainTwo} from '../index';

describe('filter-2.1', () => {

  let filter: Function;

  beforeEach(angular.mock.module(domainTwo));

  beforeEach(inject((filterTwoOneFilter: Function) => filter = filterTwoOneFilter));

  it('appends a filtered notification to the passed model', () => {
    expect(filter('foo')).toEqual('foo (filtered by filter-2.1)');
  });
});