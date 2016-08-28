"use strict";
exports.noFileType = function () { return function (filename) {
    if (filename === void 0) { filename = ''; }
    var parts = filename.split('.');
    if (parts.length > 1) {
        return parts[0];
    }
    return '';
}; };
//# sourceMappingURL=noFileType.filter.js.map