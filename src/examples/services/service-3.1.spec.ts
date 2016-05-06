import {domainThree} from '../index';
import {ServiceThreeOne} from './service-3.1';

describe('service 3.1', () => {

  let service: ServiceThreeOne;
  let timeout: ng.ITimeoutService;
  let promiseValue: any;

  beforeEach(angular.mock.module(domainThree));

  beforeEach(inject((ServiceThreeOne: ServiceThreeOne, $timeout: ng.ITimeoutService) => {
    service = ServiceThreeOne;
    timeout = $timeout;
    promiseValue = null;
  }));

  function setPromiseValue(data) {
    promiseValue = data;
  }

  describe('#doSomething', () => {

    it('resolves to a list of values after 2 seconds', () => {
      service.doSomething().then(setPromiseValue);
      timeout.flush(1999);
      expect(promiseValue).toBe(null);
      timeout.flush(1);
      expect(promiseValue).toEqual(['async', 'values']);
    });
  });
});