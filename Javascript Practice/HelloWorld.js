/**
 * @return {function}
 */


const createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
}



const f = createHelloWorld();
f(); // "Hello Worldd"

