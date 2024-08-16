// Primitive

// const score = 100;
// const scorevalue = 100.6

// const isLoggedIN = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('abc')
// const anotherId = Symbol('abc')  //Symbol---> It defines uniqueness
// console.log(id===anotherId)

// const bigNumber = 112938023742039470294723094n



// 7 types : Boolean, String, Number, Bigint, Null, Undefined, Symbol 

// Reference (Non-Primitive)

// const heros = [ 'Arjun','Krishna','Bheeshma'];
// let myObj = {
//     name : "Puneet",
//     age : 22,
// }
// let myFunction = function(){
//     console.log("Sharmajii");
// }

// Stack (Primitive), Heap(Non-Primitive) ----> It means that in stack we use the copy but in heap we use the references,
//So in Stack only the copy is changed while in Heap original data is changed

let myYoutubechannel = "Sharmajii"

let anotherName = myYoutubechannel
anotherName = "sharmapuneet"

console.log(myYoutubechannel)
console.log(anotherName)

let userOne = {
    email:"user1@gmail.com",
    upi:"user1@hdfc"
}

let userTwo = userOne

userTwo.upi = "puneet@hdfc"

console.log(userOne.upi);
console.log(userTwo.upi);