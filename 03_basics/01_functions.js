// const addTwonum = (num1, num2) => {
//   //function definition with arguments
//   console.log(num1 + num2);
// };

// addTwonum(2, 8); // only function name without argument is reference and with arguments is execution

const addTwonum = (num1, num2) => {
  // let result = num1 +num2
  // return result
  return num2 + num1;
};

const result = addTwonum(5, 7);
// console.log("Result :", result);

function loginMessage(username) {
  if (username === undefined) {
    console.log("Please enter username");
    return;
  }
  return `${username} is logged in`;
}

// console.log(loginMessage());

function shoppingCart(...val) {
  //... is a rest operator used to pass multiple values in function
  return val;
}

// console.log(shoppingCart(20, 300, 765));

const user = {
  username: "sharmajii",
  password: "129abc",
};
function handleObject(anyObject) {
  console.log(
    `${anyObject.username} is the user and password is ${anyObject.password}`
  );
}
// handleObject(user);
// handleObject({
//   username: "sam",
//   password: "234fdg",
// });

const newArr = [299, 344, 6465, 444];

function handleArr(getarray) {
  return getarray[2];
}

// console.log(handleArr(newArr));
console.log(handleArr([2939, 42423, 42342]));
