"use strict";
// Functions (optional and default parameters)
var sum = function (a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
};
sum(1);
var sum2 = function (a, b) { return a + b; };
// Unknown number of arguments
function sumEverything(arg1, arg2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    return numbers.reduce(function (result, num) { return result + num; }, 0);
}
function calcArea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
