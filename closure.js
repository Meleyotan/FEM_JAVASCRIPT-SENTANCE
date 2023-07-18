function createFunction() { 
    function multiplyBy2(numb) {
        return numb * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
console.log(result)


function outer() { 
    let counter = 0;
    function incrementCounter() { 
        return counter = counter + 2;
    }
    return incrementCounter;
}

const myNewFunction = outer();
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction())

function parentfunction() { 
    let coins = 5
    function receive() { 
        return coins = coins-1
    }
    return receive
}

//Closures are good for data privacy

const son = parentfunction()
const daughter = parentfunction()
const attach = son

console.log("This is attach", attach())
console.log("This is attach", attach())
console.log("This is attach", attach())


console.log("This is son", son())
console.log("This is son", son())
console.log("This is son", son())


console.log("This is daughter", daughter())
console.log("This is daughter", daughter())

const printHello = () => { 
    console.log("Hello!") 
}

setTimeout(printHello, 1000)