// const langs = ["JS", "python", "java", "Cpp", "C", "C#"];

// const values = langs.forEach((item) => {
//   //   console.log(item);
//   return item;                            // Here for for each do not return anything
// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newnums = myNums.filter((num) => num > 5);      // Here by filter we return the values

// console.log(newnums);

// if we use {} then we have to write return keyword

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newnums = myNums.filter((num) => {
//   // Here by filter we return the values
//   return num > 5;
// });

// we can also do this same with the use of foreach loop

// const newnums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newnums.push(num);
//   }
// });

// console.log(newnums);

// FILTERS -->>>

const books = [
  {
    name: "no 1",
    genre: "History",
    published: "1990",
    edition: "2024",
  },
  {
    name: "no 2",
    genre: "Geography",
    published: "1994",
    edition: "2010",
  },
  {
    name: "no 3",
    genre: "Drama",
    published: "1980",
    edition: "2023",
  },
  {
    name: "no 4",
    genre: "Fiction",
    published: "2003",
    edition: "2020",
  },
  {
    name: "no 5",
    genre: "Drama",
    published: "1998",
    edition: "2018",
  },
  {
    name: "no 6",
    genre: "History",
    published: "2001",
    edition: "2020",
  },
];

// const mybook = books.filter((bk) => bk.genre === "History");

// console.log(mybook);

const mygenre = books.filter((bk) => {
  return bk.published >= 1991 && bk.edition >= 2010;
});

console.log(mygenre);
