"use strict";
/**
 * Functions that can be used to modify / change / anything different
 * properties / methods in the class
 * Decorators can be accessed on a property, method or an accessor
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boats color is " + this.color;
        },
        enumerable: true,
        configurable: true
    });
    Boat.prototype.pilot = function () {
        throw new Error('Oops');
        // console.log('swish')
    };
    __decorate([
        logError('Some error!'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Boat.prototype, "pilot", null);
    return Boat;
}());
exports.Boat = Boat;
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
// function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
//     console.log(target);
//     console.log(key) 
// }
