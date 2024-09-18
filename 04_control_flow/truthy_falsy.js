// const userEmail = "p@sharma.ai";
// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("user don't have email");
// }
// const userEmail = "";
// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("user don't have email");
// }
const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("user don't have email");
}

// Falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values
// Remaining all are truthy values like,
// "0","false"," ",[],{},function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

if (false == 0) {
  console.log("true");
}
if (false == "") {
  console.log("true");
}
if (0 == "") {
  console.log("true");
}

// Nullish Coelescing Operator (??): null undefined

// console.log(null ?? 10, "red", null || 10);
console.log(null ?? 100 ?? 300);

const obja = {
  name: undefined,
};
console.log(obja?.full ?? " jai shree ram"); //when we do not know if the value exist or not

//  turnary operator

const teaPrice = 100;
teaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
