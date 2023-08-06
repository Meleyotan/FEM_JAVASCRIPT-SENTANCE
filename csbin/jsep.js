//Welcome to CSBin!

// const { indexOf } = require("lodash");

//http://csbin.io

// CSBin is powered by Codesmith.We teach aspiring JavaScript developers about the fundamentals of the
// language.The link to this week's challenge will be provided tonight. Until then, experiment in our
// JavaScript interpreter!

// How to use CSBin
// You and your pair programming partner can create a private CSBin to work together in.

// Create a unique URL by appending an additional path with your names(or any unique word) to the end of one of the challenge URLs below.
// (Example: csbin.io / callbacks / [myroom]).
// Both partners should navigate to this unique URL.Make sure you're able to see each other typing -
// once connected, you should both be able to type in the code editor and run code.

// Directory of challenges:
// -Intro to JavaScript //http://csbin.io/jsep
// -Callbacks //http://csbin.io/callbacks
// -Closures //http://csbin.io/closures
// -Asynchronous JavaScript //http://csbin.io/async
// -Object-Oriented Programming http://csbin.io/oop
// - Recursion http://csbin.io/recursion

// You can continue practicing JavaScript on CSX(https://csx.codesmith.io/), our online learning platform.
//We also host workshops regularly - find the full schedule(https://app.codesmith.io/coding-events#) here.


// JS The Easier Parts - Variables, Data Types, and Control Flow

// Challenge 1
// Replace the blank underscores inside the console logs with the data type(i.e. 'string')
// you think each value will be. (Leave the quotes)

// Ex.
// var myStr = "hello"
// console.log(typeof myStr === "string") //=> true

/* ========== *
* Challenge 1 *
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = "Meleyotan" //add your name here
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished

// Challenge 2
// Create a functon buildSentence that takes three words(strings) and adds them together and
// console.logs the whole sentence(string) complete with capitalization and punctuation.

/* ========== *
* Challenge 2 *
* =========== */


function buildSentence(word1, word2, word3) {
  word1 = word1.charAt(0).toUpperCase() + word1.slice(1)
  const result = (`${word1} ${word2} ${word3}.`)
  console.log(result)
  //your code goes here...

}

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."


// Challenge 3
// Create a function lastLetter that takes a word(string) and console.logs the last character / letter of
// that word.
// Hint: Remember that each character / letter in a string has an index position that you can access
// with brackets: []

/* ========== *
* Challenge 3 *
* =========== */


function lastLetter(word) {
  const no_ = word.length
  console.log(word.slice(no_ - 1))
  //your code goes here...
}

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


// Challenge 4
// Create a function buildGreeting that takes a time(integer) and a name(string) and print a
// greeting based on the following rules:
// If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
// If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
// If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
// If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!

/* ========== *
* Challenge 4 *
* =========== */


function buildGreeting(time, name) {


  //your code goes here...

  switch (true) {
    case (time <= 11):
      console.log(`Good morning ${name}`)
      break;
    case (time >= 12 && time <= 16):
      console.log(`Good afternoon ${name}`)
      break;
    case (time >= 17 && time <= 23):
      console.log(`Good evening ${name}`)
      break;
    default:
      console.log(`That's not a real time,${name}`)
  }
}



// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"

// Challenge 5
// indexOf is a function that you can call on a string(string1) and accepts another string(string2) as
// an argument.
// It searches through string1 from left to right checking each character to see if it can find string2.
// If it finds string2 it returns the index position of the FIRST character that matches string2.
// If it cannot find string2 it returns negative one: -1.
// Enter the index position you think indexOf will return for each below.

function indexOf(string1, string2) {
  function loopThrough() {
    for (i = 0; i < string1.length; i++) {
      if (string1[i] == string2[0]) {
        return i
      }
    }
    return -1
  }
  return loopThrough
}

// console.log(indexOf("Meleyotan", "e")())



// Challenge 6
// Create a function letterExists that takes a word(string) and a character(string), and console.logs
// whether that letter can be found inside that word.

/* ========== *
* Challenge 6 *
* =========== */


function letterExists(word, letter) {
  //your code goes here...
  function loopThat() {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == letter[0]) {
        return true
      }
    }
    return false
  }
  return loopThat
}

// console.log(letterExists("superman", "e")()) //=> true
// console.log(letterExists("starship", "S")()) //=> false
// console.log(letterExists("th1s", "1")()) //=> true
// console.log(letterExists("he!lo", "!")()) //=> true
// console.log(letterExists([1,2,3,4,5],String(5))())


// Challenge 7
// Create a function isPrime that console.logs a boolean indicating if `number` is prime or not.

/* =========== *
* Challenge 7 *
* ============ */


function isPrime(number) {
  // your code here...
  //define what a prime number is, it has to meet three conditions
  //must not be less than 2, any number must not divide it perfectly except itself
  if (number === 2) { 
    return true
  }

  if (number < 2) { 
    return false
  }

  let root = Math.ceil(Math.sqrt(number))// Math.ceil returns the close greater number to the square root value

  for (i = 2; i <=root; i++) { 
    if (number % i === 0) {
      return false
    }
  }
  return true
}

// console.log(isPrime(-7)) // => false
// console.log(isPrime(2)); // => true
// console.log(isPrime(11)); // => true
// console.log(isPrime(15)); // => false
// console.log(isPrime(8)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(121)); // => false
// console.log(isPrime(127)); // => true

// Challenge 8
// Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.

/* ========== *
* Challenge 8 *
* =========== */


function range(start, end) {
  for (i = start; i <= end; i++) {
    console.log(i)
  }
  //your code goes here...

}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>

// Challenge 9
// Create a function myIndexOf that takes an array and an element and console.logs the index of 
//the element
// in the array, or - 1 if it doesn't exist.
// Assume the `ele` will be a primitive data type (no arrays or objects).
// DO NOT USE THE BUILT - IN`indexOf` METHOD IN YOUR SOLUTION!

/* =========== *
* Challenge 9 *
* ============ */


function myIndexOf(array, ele) {
  // your code here...
  function loopThrough() {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == ele[0]) {
        return ("Challenge 9", i)
      }
    }
    return -1
  }
  return loopThrough
}

// console.log(myIndexOf([1, 2, 3, 4, 5], String(5))())

//myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
//myIndexOf(["a", "b", "c"], "a") //=> 0
//myIndexOf(["a", "b", "c"], "d") //=> -1

// Challenge 10
// Create a function unique that console.logs an array where all the duplicates of the input 
//array have been removed; in other words, every element remaining is unique.

/* =========== *
* Challenge 10 *
* ============ */

function unique(array) {
  let new_array = []
  for (i = 0; i < array.length; i++) {
    if (!(new_array.includes(array[i]))) {
      new_array.push(array[i])
    }
  }
  console.log(new_array)
}
// return new_array



// unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"])// => ["a", "c", "aa", "b"]

// Challenge 11
// Create a function longestWord that retuns the longest word of a sentence.
// If there are ties, the function should return the later word.

/* =========== *
* Challenge 11 *
* ============ */

function longestWord(sentence) {
  let longest = 0
  let words = ""
  let array = []
  // convert to arrays //split with space separator
  array = sentence.split(" ")
  // map the array to each word length
  array.forEach(element => {
    if (element.length >= longest) {
      longest = element.length
      words = element
    }
  });
  return words
  // let each number compare with other numbers in the array
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


// Challenge 12
// Create a function disemvowel that takes in a string and returns a string with all vowels removed.

/* =========== *
* Challenge 12 *
* ============ */



function disemvowel(string) {
  let vowel = ["a", "e", "i", "o", "u"]
  let string_array = []
  let new_string = ""
  string_array = string.split("")
  for (let i = 0; i < string_array.length; i++) { 
    if (!(vowel.includes(string_array[i].toLowerCase()))) {
      new_string += string_array[i]
    }
  }
  return new_string
  // create a regular expression that detects vowels
  // loop through each of the string and compare against the regex
  // let the ones that pass through gets written into a new string
  // your code here...

}

/* =========================== *
* Test on how .includes() work *
* ============================ */

let a = [1, 2, 3, 4]
let b = [2, 6, 4, 6, 7, 8, 9]
let c = []
function check() {
  b.forEach(element => {
    if (!(a.includes(element))) {
      c.push(element)
    }
  })
  return c
}

// console.log(check())

//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


// Challenge 13
// Create a function divisibleByFivePairSum that takes an array of numbers.
// It should return an array of all the pairs of indices whose sum is a multiple of five.

/* =========== *
* Challenge 13 *
* ============ */

function divisibleByFivePairSum(array) {
  // your code here...
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if ((array[i] + array[j]) % 5 === 0) {
        new_array.push([array[i], array[j]])
      }
    }
  }
  return new_array
}


//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


// Challenge 14
// Create a function highestScore that takes in an array of student objects as a parameter.

// It should return a string that corresponds to the student with the highest score.

// The string should contain that student's initials concatenated with their id.

// Assume the array contains at least 1 student object and the student with the highest score is unique
// (there are no ties).

/* =========== *
* Challenge 14 *
* ============ */

function highestScore(student) {
  //set a highest score of 0
  //loop through the score of each student and compare with the highestscore of 0
  //update the latest highest score
  //return the highest score after the loop
  //return the iniitals of the person with the highest score
  // your code here...
  let highestscore = 0
  for (let i = 0; i < student.length; i++) {
    if (student[i].score > highestscore) {
      student_name = student[i].name.split(" ")
      student_id = student[i].id
      highestscore = student[i].score
    }
  }
  return (student_name[0].charAt(0) + student_name[1].charAt(0) + student_id)
}

//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'


// Challenge 15
// Create a function leastCommonMultiple that takes two numbers(integers) as input and returns the lowest
// number which is a multiple of both inputs.

/* =========== *
* Challenge 15 *
* ============ */

function leastCommonMultiple(num1, num2) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312


// Extension 1
// Create a function arrayBuilder that takes in a count object and returns an array filled with the
// appropriate numbers of elements.The order of the elements in the array does not matter, but repeated
// elements should be grouped.

/* ========== *
* Extension 1 *
* =========== */

function arrayBuilder(count) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []

// Extension 2
// Create a function objectBuilder that takes in a number and returns an object whose keys are 0 up
// to number and the values are that same number multipled by 5.

/* ========== *
* Extension 2 *
* =========== */

function objectBuilder(count) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
// 0: 0,
// 1: 5,
// 2: 10,
// 3: 15,
// 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }


// Extension 3
// Create a function secretCipher that takes in an string(sentence) and an object(cipher).Return a
// string where every character is replaced with its cooresponding value in the cipher.If the character
// doesn't exist in the cipher, use the original character.

/* ========== *
* Extension 3 *
* =========== */

function secretCipher(sentence, cipher) {
  // your code here...

}



//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"

// Extension 4
// Create a function passingStudents that accepts an array of student objects.
// It should iterate through the list of students and return an array of the names of all the students
// who have an average grade of at least 70.

/* ========== *
* Extension 4 *
* =========== */

function passingStudents(students) {
  // your code here...

}


//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];

// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]