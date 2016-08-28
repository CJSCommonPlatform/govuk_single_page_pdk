"use strict";
exports.toFileType = function () { return function (filename) {
    if (filename === void 0) { filename = ''; }
    var parts = filename.split('.');
    if (parts.length > 1) {
        return parts[parts.length - 1].toUpperCase();
    }
    return '';
}; };
//# sourceMappingURL=toFileType.filter.js.map