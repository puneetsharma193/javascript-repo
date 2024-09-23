const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ["abc", "def", "ghi"];

// arr1.push(arr2);
// console.log(arr1);

myArr = arr1.concat(arr2);
console.log(myArr);

const allArr = [...arr1, ...arr2, ...myArr]; //  Spread operator
console.log(allArr);

const arr3 = [
  10,
  20,
  [30, 40, 50],
  60,
  70,
  [80, 90, [95, 100, [101, 102, 103, 104, 105]]],
];
const myArr2 = arr3.flat(3);

console.log(myArr2);

console.log(Array.isArray("sharmajii"));
console.log(Array.from("sharmajii"));
console.log(Array.from({ name: "sharma" })); // we should declare what will be converted i.e. key or value

let a1 = 100,
  a2 = 200,
  a3 = 300;

console.log(Array.of(a1, a2, a3));

let arr7 = [3, 5, 1, 2, 7];
console.log([...arr7, ...arr1]);
