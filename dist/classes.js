"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Robot = /** @class */ (function () {
    function Robot(_name) {
        this._name = _name;
        this._color = '';
    }
    Robot.isColorAvailable = function (color) {
        return Robot.availableColors.includes(color);
    };
    Robot.prototype.askName = function () {
        console.log("My name is " + this.name);
    };
    Robot.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + " meters");
    };
    Object.defineProperty(Robot.prototype, "color", {
        set: function (color) {
            if (!Robot.isColorAvailable(color)) {
                throw new Error("Color " + color + " is not available");
            }
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Robot.prototype, "name", {
        get: function () {
            return this._name + '_SUFFIX';
        },
        set: function (value) {
            this._name = 'PREFIX_' + value;
        },
        enumerable: true,
        configurable: true
    });
    // protected name: string
    Robot.availableColors = ['green', 'yellow'];
    return Robot;
}());
var FlyingRobot = /** @class */ (function (_super) {
    __extends(FlyingRobot, _super);
    function FlyingRobot(name, jetpackSize) {
        var _this = _super.call(this, name) || this;
        _this.jetpackSize = jetpackSize;
        return _this;
    }
    FlyingRobot.prototype.move = function (distance) {
        console.log(this.name + " is flying");
        _super.prototype.move.call(this, distance);
    };
    return FlyingRobot;
}(Robot));
var robot = new Robot('John');
robot.askName();
var flyingRobot = new FlyingRobot('Jim', 2);
flyingRobot.move(10);
console.log("Flying robot's jetpack size is", flyingRobot.name);
flyingRobot.name = 'Kevin';
console.log("My name is " + flyingRobot.name);
