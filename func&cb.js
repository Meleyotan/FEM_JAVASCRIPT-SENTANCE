// function copyArrayAndMultiplyBy2(array) {
// const output = [];
// for (let i = 0; i < array.length; i++) {
// output.push(array[i] * 2);
// }
// return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);


//The DRY(Don't Repeat Yourself) Principle is being broken right now
//by repeating the same code over and over again with only slight change.
//We can use the Higher Order Function to solve this problem

// function copyArrayAndDivideBy2(array) {
// const output = [];
// for (let i = 0; i < array.length; i++) {
// output.push(array[i] / 2);
// }
// return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndDivideBy2(myArray);


// function copyArrayAndAdd3(array) {
// const output = [];
// for (let i = 0; i < array.length; i++) {
// output.push(array[i] + 3);
// }
// return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndAdd3(myArray);

// Using HighOrder Functions to answer the above problem. Highorder Functions are functions
// that take in other functions as arguments or return a function as a result.

// function copyArrayAndManipulate(array, instructions) {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]))
//     }
//     return output;
// }


//Rewriting the above function using the arrow syntax

const copyArrayAndManipulate = (array, instructions) => { 
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]))
    }
}

// function multiplyBy2(input) {
//     return input * 2;
// }

//Rewriting the above function using the arrow syntax
const multiplyBy2 = (input) => { 
    return input * 2;
}

// function divideBy2(input) { 
//     return input / 2;
// }

//Rewriting the above function using the arrow syntax
const divideBy2 = (input) => { 
    return input / 2;
}

// function add3(input) {
//     return input + 3;
// }

//Rewriting the above function using the arrow syntax
const add3 = (input) => { 
    return input + 3;
}

copyArrayAndManipulate([1, 2, 3], multiplyBy2);
copyArrayAndManipulate([6, 8, 10], divideBy2)
copyArrayAndManipulate([1, 2, 3, 4], add3)

// console.log(result)
// console.log(result2)
// console.log(result3)