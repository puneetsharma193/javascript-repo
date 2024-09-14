// var c = 355;
let a = 200;

if (true) {
  //inside {} is block scope and outside {} is global scope also var should be aqvoided coz var is accesseble outside the scope
  let a = 100;
  const b = 400;
  //   var c = 10;
  console.log("inner :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "puneet";
  function two() {
    const website = "youtube";
    // console.log(`${userName} is on ${website}`);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const userName = "puneet";
  if (userName === "puneet") {
    const website = "twitter";
    console.log(userName + website);
  }
}

// ++++++++++++++++ INTRESTING +++++++++++++++++++

console.log(addone(8));
function addone(num) {
  return num + 1;
}
// console.log(addtwo(4));  // this cannot be done coz this type of declaration would not acces function before initialisation
const addtwo = function (num) {
  return num + 2;
};
console.log(addtwo(4));
