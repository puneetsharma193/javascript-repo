//  Imediately Invoked function Expressions (IIFE)
// these are invoked immediately and these are used to prevent the function from global scope varible pollution

(function chai() {
  // it is named IIFE
  console.log(`DB CONNECTED`);
})();

// note :> we have compulsory to use semicolon at the end other it will not end

(() => {
  //unnamed IIFE
  console.log(`DB CONNECTED TWO`);
})();

((name) => {
  //IIFE with parameter
  console.log(`My name is ${name}`);
})("Puneet");
