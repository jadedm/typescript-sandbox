"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var lastEl = function (arr) {
    return arr[arr.length - 1];
};
var el1 = lastEl([1, 2, 3]);
var el2 = lastEl(['a', 'b', 'c']);
var makeArr = function (x) {
    return [x];
};
var el3 = makeArr(2);
var el4 = makeArr('a');
var makeArr2 = function (x, y) {
    return [x, y];
};
var el5 = makeArr2(1, 2);
var el6 = makeArr2('a', 'b');
var el7 = makeArr2('a', 2);
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var name1 = makeFullName({ firstName: 'clark', lastName: 'Kent', age: 29 });
var ArrOfThings = /** @class */ (function () {
    function ArrOfThings(collection) {
        this.collection = collection;
    }
    ArrOfThings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrOfThings;
}());
var arr = new ArrOfThings([1, 2, 3]);
