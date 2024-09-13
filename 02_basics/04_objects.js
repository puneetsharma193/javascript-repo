//singleton objects

const firstUser = new Object();

firstUser.id = "12ab";
firstUser.name = "ben";
firstUser.email = "ben12@gmail.com";
// console.log(firstUser)

const regularUser = {
  id: "1234def",
  name: {
    fullName: {
      firsname: "sam",
      lastname: "dcruz",
    },
  },
};

// console.log(regularUser.name.fullName.firsname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj9 = { 7: "deg" };
const obj3 = { ...obj1, ...obj2 }; //merging two objects

const obj4 = Object.assign({}, obj9, obj2);
// console.log(obj3);
// console.log(obj4);

// console.log(typeof obj3);

const users = [
  {
    id: 1,
    name: "eleven",
  },
  {
    id: 2,
    name: "twelve",
  },
];
users[1].name;
console.log(firstUser);

// console.log(Object.keys(firstUser));
// console.log(Object.values(firstUser));
// console.log(Object.entries(firstUser));

console.log(firstUser.hasOwnProperty("mail"));

const course = {
  courseName: "object De structuring",
  price: "36",
  courseInstructor: "Sharmajii",
};

const { courseInstructor: Ins, courseName, price } = course;
console.log(price, courseName, Ins); // Object De-Structuring
