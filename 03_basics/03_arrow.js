const user = {
  username: "puneet",
  price: 1000,

  welcomemessage: function () {
    console.log(`Hii ${this.username}, welcome to the website`);
    console.log(this);
  },
};
// user.welcomemessage();
// user.username = "SAM";// here when context of username is changed then we got the updated value
// user.welcomemessage();

// console.log(this); // here context show {} coz we are in the node environment while in browser it shows window

// ++++++ NOTE +++++++
// this keyword is used refer the current context

// function chai() {
//   let username = "puneet";
//   console.log(this.username); //  here context is not working coz this is not working in functions
// }
// chai();

// const chai = function () {
//   let username = "puneet";
//   console.log(this.username);
// };

const chai = () => {
  let username = "puneet";
  console.log(this);
};

// chai();

// const addtwonum = (num1, num2) => {
//   return num1 + num2;
// };

// const addtwonum = (num1, num2) => num1 + num2;

const addtwonum = (num1, num2) => ({ username: "puneet" });

console.log(addtwonum());
