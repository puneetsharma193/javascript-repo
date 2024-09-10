//singleton
//Object.create


//object literals

const mySym = Symbol("key1")


const myUser ={
    name : "Puneet",
    "age" : 22,
    [mySym]: "this is symbol",
    "second age": 34,
    location: "Noida",
    email: "ps123@gmail.com",
    isLoggedin: true,
    lastLogin: ["Monday","Tuesday"]
}

// console.log(myUser.age);//accessing through . should be avoided
// console.log(myUser["second age"]);//this method should be preferred
// console.log(myUser[mySym]);
// myUser.name = "sharma"
// console.log(myUser);
// Object.freeze(myUser)
myUser.location = "gurugram"
// console.log(myUser);

myUser.greeting = function(){
    console.log("hello user");
}

console.log(myUser.greeting());

myUser.greetingtwo = function(){
    console.log(`hello ${this.name}`);
}
console.log(myUser.greetingtwo());
