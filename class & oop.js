const user1 = {
    name: "Meleyotan",
    age: 21,
    email: "meleyotanoyeleke@gmail.com",
    greet: () => { console.log("Hello", user1.name + "!") },
    increment: () => { user1.age + 1}
}

// console.log(user1.name)
// user1.greet()

const user2 = Object.create(null)
user2.name = "Oreoluwa"


const user3 = {}


//But now the programming principle of DRY is being broken, we have to generalize the function

const userCreator = (name, score) => {
    newUser = {}
    newUser.name = name
    newUser.score = score
    newUser.increment = function increment() { 
        console.log("Increment:", newUser.score++)
    }
    return newUser
}
 
const user4 = userCreator("Will", 5)
const user5 = userCreator("Bola", 7)


// user4.increment()
// user4.increment()
// user4.increment()
// user5.increment()
// user5.increment()
// user5.increment()

// console.log(user4.score)
// console.log(user5.score)

// user4.increment()
// user4.increment()
// user4.increment()
// user5.increment()
// user5.increment()
// user5.increment()

// console.log(user4.score)
// console.log(user5.score)

//For the code below, the changes made compared to the one above is, to avoid the Repeating codes,the
// increment function is stored seperately in a function store, then each user links to it with a
//prototype chain(__proto__ property) that is indelibly connected to it wiehn
//Object.create() is used to create the users instead of the one above that is being
// created by intializing an empty object


const userCreator1 = (name, score) => {
    newUser = Object.create(userFunctionStore) 
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctionStore = {
//Also when the function wants to be gotten from the userfunction store, it is important to use the "this"
//keyword that lets you refer the present user you want to the use the function on

increment: function(){this.score++;},
login: function(){console.log("Logged in");}
};
 
const user6 = userCreator1("Will", 5)
const user7 = userCreator1("Bola", 7)

user6.login()
console.log(user6.hasOwnProperty("name"))


//for this code below, the use of object.create is eliminated and a new way of creating newUsers is 
//introduced
function useCreator(name, score) {
    this.name = name //assigns name argument to the "name" parameter automatically created using "this"
    this.score = score//same as above but score
}

useCreator.prototype //declares a prototype link
useCreator.prototype.increment = function () { //adds a newfunction to the prototype store
    this.score++ //this will mandate the function to work on only the present user being created
}

const user8 = new useCreator("Meleyotan", 10)//the new is there to replace Object.create, it creates an empty object capa
//capable of having an automatic proto property that can link users to functions
console.log(user8)
user8.increment()
console.log(user8)
console.log(user8)
console.log(user8)


// This block of code below is a syntatic sugar kind of for the one above, they do both the same thing
// but at this point, the class constructor is used  and the methods are declared without using the
// dot prototype
class newestCreator{
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    increment() { 
        this.score++
    }
    login() { 
        console.log("I am logged in!")
    }
}

const user9 = new newestCreator("Dan", 8)
user9.login()


