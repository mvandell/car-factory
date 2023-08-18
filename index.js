class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This is a ${this.year} ${this.make} ${this.model}.`
    }
}

class ElectricCar extends Car {
    constructor (make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    getDescription() {
        return `This is a ${this.year} ${this.make} ${this.model} with a range of ${this.range} miles.`
    }
}

const car1 = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(car1.getDescription())