class OldCalc {
    operations(t1, t2, op) {
        switch (op) {
            case "add": return t1 + t2
            case "sub": return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }
    sub(t1, t2) {
        return t1 + t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    operations(t1, t2, op) {
        switch (op) {
            case "add": return this.calc.add(t1, t2)
            case "sub": return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log('old', oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalc()
console.log('new', newCalc.add(10, 5));

const adapter = new CalcAdapter()
console.log('adapter', adapter.operations(10, 15, 'add'));