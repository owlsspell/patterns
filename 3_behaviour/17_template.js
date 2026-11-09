class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    responsibilities() { }
    work() {
        return `${this.name} ${this.responsibilities()}`
    }
    getPaid() {
        return `${this.name} has been paid $${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }
    responsibilities() {
        return 'write code'
    }
}
class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }
    responsibilities() {
        return 'write tests'
    }
}

const dev = new Developer('John', 10000)
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Anna', 8000)
console.log(tester.getPaid());
console.log(tester.work());