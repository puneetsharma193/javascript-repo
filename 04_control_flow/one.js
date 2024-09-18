//if

const isUserloggedin = true;

if (2 !== "4") {
  // console.log("executed");
}

// <,>,>=,<=,==,!=,!==,===

// const score = 200;

// if (score > 100) {
//   const power = "drive";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // display error because of scope

// Short hand notation

const balance = 20000;
// if (balance > 5000)
//   console.log(`your balance is:${balance}`), console.log("test2");
//here we have implicit scope but it of only in one line , this should be avoided

// if (balance < 10000) {
//   console.log("less than 10000");
// } else if (balance < 15000) {
//   console.log("less than 15000");
// } else if (balance < 20000) {
//   console.log("less than 20000");
// } else {
//   console.log("less than 25000");
// }

const userloggedin = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;
if (userloggedin && debitcard) {
  console.log("allowed to buy courses");
}

if (loggedinfromemail || loggedinfromgoogle) {
  console.log("User logged in");
}
