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

// Using HighOrder Functions to answer the above problem

function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]))
    }
    return output;
}

function multiplyBy2(input) {
    return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result)