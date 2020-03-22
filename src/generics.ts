type strArr = Array<string>
type NumArr = Array<number>

const lastEl = <T>(arr: Array<T>) => {
    return arr[arr.length - 1]
}

const el1 = lastEl([1,2,3])
const el2 = lastEl<string>(['a','b','c'])

const makeArr = <T>(x: T) => {
    return [x]
}

const el3 = makeArr(2)
const el4 = makeArr('a')

const makeArr2 = <X, Y>(x: X, y: Y): [X,Y] => {
    return [x, y]
}

const el5 = makeArr2(1,2)
const el6 = makeArr2('a','b')
const el7 = makeArr2<string | null, number>('a', 2)

const makeFullName = <T extends { firstName: string, lastName: string }>(obj:T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const name1 = makeFullName({ firstName: 'clark', lastName: 'Kent', age: 29 })

class ArrOfThings<T>{
    constructor(public collection: T[] ) {

    }
    get(index: number) {
        return this.collection[index]
    }
}

const arr = new ArrOfThings([1,2,3])