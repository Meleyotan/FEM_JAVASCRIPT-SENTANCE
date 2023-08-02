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


const userCreator1 = (name, score) => {
    newUser = Object.create(userFunctionStore) 
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctionStore = {
increment: function(){this.score++;},
login: function(){console.log("Logged in");}
};
 
const user6 = userCreator1("Will", 5)
const user7 = userCreator1("Bola", 7)

user6.login()
console.log(user6.hasOwnProperty("name"))
