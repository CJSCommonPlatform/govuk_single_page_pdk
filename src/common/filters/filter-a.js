"use strict";
/* @ngInject */
function filterA() {
    return function (model) {
        return model.propOne + ' (filtered by filter-a)';
    };
}
exports.filterA = filterA;
//# sourceMappingURL=filter-a.js.map