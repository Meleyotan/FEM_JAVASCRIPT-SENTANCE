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
        counter++;
    }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
console.log(myNewFunction())

