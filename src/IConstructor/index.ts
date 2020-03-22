/*
 * Classes have two sides: instance and static. both of these sides can contain
 * public, private and protected members, but using interfaces we can 
 * implement the instance public side of the class
 * this means we can implement only the public properties and methods that 
 * belong to the instance side of the class
 * from the static side we can only describe the constructor
 */

interface Kettle {
    volume: number;
}

interface KettleConstructor {
    new(volume: number): Kettle;
}


class TeaKettle implements Kettle {
    volume: number;
    constructor(volume: number) {
        this.volume = volume
    }
}

class ElectricKettle implements Kettle {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}

const kettleFactory = (KettleClass: KettleConstructor) => {
    const kettle = new KettleClass(2);
    // test
    // pack
    return kettle;
}

const teaKettle = kettleFactory(TeaKettle);
const electricKettle = kettleFactory(ElectricKettle);


