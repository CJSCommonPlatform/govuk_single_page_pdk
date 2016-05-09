"use strict";
var ServiceThreeOne = (function () {
    function ServiceThreeOne(_$q, _$timeout) {
        this._$q = _$q;
        this._$timeout = _$timeout;
    }
    ServiceThreeOne.prototype.doSomething = function () {
        var deferred = this._$q.defer();
        // simulate async
        this._$timeout(function () { return deferred.resolve(['async', 'values']); }, 2000);
        return deferred.promise;
    };
    ServiceThreeOne.$inject = ['$q', '$timeout'];
    return ServiceThreeOne;
}());
exports.ServiceThreeOne = ServiceThreeOne;
//# sourceMappingURL=service-3.1.js.map