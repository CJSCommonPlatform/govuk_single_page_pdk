"use strict";
exports.toBytes = function () { return function (bytes, precision) {
    var _bytes = bytes;
    // use 1000 instead of 1024 to be consistent with OS X
    if (isNaN(parseFloat(_bytes)) || !isFinite(_bytes)) {
        return '-';
    }
    if (typeof precision === 'undefined') {
        precision = 0;
    }
    var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    var num = Math.floor(Math.log(_bytes) / Math.log(1000));
    return (_bytes / Math.pow(1000, Math.floor(num))).toFixed(precision) + " " + units[num];
}; };
//# sourceMappingURL=toBytes.filter.js.map