/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};

class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() {
        return ++this.n;
    }
}

const counter_10 = Counter(10)
counter_10.increment() // 10

const counter_const = createCounter(10)
counter_const() // 10
counter_const() // 11
counter_const() // 12

