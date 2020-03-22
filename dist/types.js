"use strict";
// Boolean
var b = true;
// Number
var num = 1 + 1 + 1 + 0x1;
// String
var hello = 'Hello';
var world = 'World';
var helloWorld = "\n  " + hello + "\n  " + world + "\n";
// Null and Undefined
var n = null;
var u = undefined;
//let someNumber: number = null;
var someNumber = 0;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);
var myObj = new Map();
// Void
function log(message) {
    console.log(message);
    //return 'a string';
}
// Array
var array1 = ['x', 'y'];
var array2 = array1;
// Tuple
var tuple = ['str', 1];
// Enum
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
var myFavoriteColor = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
// console.log(Color['red']);
// Any
var ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
// Type Assertions
var email = typeof document !== 'undefined' ? document.getElementById('email') : null;
if (email) {
    email.addEventListener('change', function (e) {
        var input = e.currentTarget;
        console.log(input.value);
    });
}
