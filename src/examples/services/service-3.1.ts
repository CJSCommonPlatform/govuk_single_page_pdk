
export class ServiceThreeOne {

  static $inject = ['$q', '$timeout'];

  constructor(private _$q: ng.IQService, private _$timeout: ng.ITimeoutService) {}

  doSomething(): ng.IPromise<string[]> {
    const deferred = this._$q.defer();
    // simulate async
    this._$timeout(() => deferred.resolve(['async', 'values']), 2000);
    return deferred.promise;
  }
}