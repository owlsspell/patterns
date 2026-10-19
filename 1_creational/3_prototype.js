const car = {
    wheels: 4,
    init() {
        console.log(`This car has ${this.wheels} wheels. My owner is ${this.owner}.`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'John'
    }
})

console.log(carWithOwner.__proto__ === car);

carWithOwner.init()