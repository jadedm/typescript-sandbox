"use strict";
/*
 * Classes have two sides: instance and static. both of these sides can contain
 * public, private and protected members, but using interfaces we can
 * implement the instance public side of the class
 * this means we can implement only the public properties and methods that
 * belong to the instance side of the class
 * from the static side we can only describe the constructor
 */
var TeaKettle = /** @class */ (function () {
    function TeaKettle(volume) {
        this.volume = volume;
    }
    return TeaKettle;
}());
var ElectricKettle = /** @class */ (function () {
    function ElectricKettle(volume) {
        this.volume = volume;
    }
    return ElectricKettle;
}());
var kettleFactory = function (KettleClass) {
    var kettle = new KettleClass(2);
    // test
    // pack
    return kettle;
};
var teaKettle = kettleFactory(TeaKettle);
var electricKettle = kettleFactory(ElectricKettle);
