class MyIterator {
    constructor(data) {
        this.data = data
        this.index = 0
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {
                        value: undefined,
                        done: true,
                    }
                }
            }
        }
    }
}

function* generator(array) {
    let index = 0
    while (index < array.length) {
        yield array[index++]
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator'])
const gen = generator(['This', 'is', 'iterator'])

// for (const word of iterator) {
//     console.log('Word:', word);
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);