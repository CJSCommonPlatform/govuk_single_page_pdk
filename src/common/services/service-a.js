"use strict";
var ServiceA = (function () {
    function ServiceA(_$http, _$q) {
        this._$http = _$http;
        this._$q = _$q;
    }
    ServiceA.prototype.create = function (value1, value2) {
        var _this = this;
        return this._$http({
            method: 'POST',
            url: '/models',
            data: { value1: value1, value2: value2 }
        })
            .then(function (res) { return res.data; })
            .catch(function (res) { return _this._$q.reject(res.data); });
    };
    ServiceA.prototype.findOne = function (id) {
        var _this = this;
        return this._$http({
            method: 'GET',
            url: "/models/" + id
        })
            .then(function (res) { return res.data; })
            .catch(function (res) { return _this._$q.reject(res.data); });
    };
    ServiceA.$inject = ['$http', '$q'];
    return ServiceA;
}());
exports.ServiceA = ServiceA;
//# sourceMappingURL=service-a.js.map