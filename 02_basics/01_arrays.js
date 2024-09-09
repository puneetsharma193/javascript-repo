// array

const arr1 = [1,2,3,4]
const arr2 = new Array("mkda",1,23,33)

// console.log(arr1)
// console.log(arr2);

// console.log(arr2.length);


//Array methods--->>>>>>>>

arr2.push(8)

arr2.pop()
// console.log(arr2);


arr1.unshift(8)
// console.log(arr1);
arr1.shift()
// console.log(arr1);


// console.log(arr1.includes("abc"));
// console.log(arr1.indexOf(3));

const newArr = arr2.join()

// console.log(arr2);
// console.log(newArr);
// console.log(typeof arr1);
// console.log(typeof newArr);

//slice and splice --->>>>>

const myArr1 = arr1.slice(1,3) 
console.log(arr1);

console.log(myArr1);
const myArr2 = arr1.splice(1,3)//it not only includes the last range but also manipiluted the original array
console.log(arr1);

console.log(myArr2);


