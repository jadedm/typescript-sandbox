/**
 * Functions that can be used to modify / change / anything different
 * properties / methods in the class
 * Decorators can be accessed on a property, method or an accessor
 * 
 */

export class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return  `This boats color is ${this.color}`
    }

    @logError('Some error!')
    pilot(): void {
        throw new Error('Oops')
        // console.log('swish')
    }
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        const method = desc.value
        desc.value = function() {
            try {
                method()
            } catch(e) {
                console.log(errorMessage)
            }
        }
    }
}
// function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
//     console.log(target);
//     console.log(key) 
// }