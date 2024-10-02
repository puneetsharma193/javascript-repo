const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newnums = myNums.map((num) => num + 100);

const newnums = myNums.map((num) => num * 20).filter((num) => num <= 100);

console.log(newnums);
