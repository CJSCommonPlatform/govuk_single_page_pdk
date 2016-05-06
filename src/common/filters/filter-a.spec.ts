import {common} from '../index';

describe('filter-a', () => {

  let filter: Function;

  beforeEach(angular.mock.module(common));

  beforeEach(inject((filterAFilter: Function) => filter = filterAFilter));

  it('appends a filtered notification to the passed model', () => {
    expect(filter({propOne: 'foo'})).toEqual('foo (filtered by filter-a)');
  });
});